// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

// Importing the ERC1155, Ownable contracts from OpenZeppelin
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
// Importing the Escrow contract
import "./Escrow.sol";

// Contract "Store" inherits from ERC1155 and Ownable
contract Store is ERC1155, Ownable {
    // "Product" struct to represent a product for sale
    struct Product {
        string name; // Name of the product
        uint256 price; // Price of the product
        address seller; // Address of the seller who listed the product for sale
    }

    mapping(uint256=>string) tokenURIs;

    // Length of escrow post which escrow will be realeased to seller if buyer doesn't confirm delivery
    uint256 ESCROW_LENGTH = 24 weeks;

    // Mapping from token IDs to the products they represent
    mapping(uint256 => Product) public tokenIdToProducts;

    // Address of the escrow contract
    address immutable escrow;

    string public name;
    string public symbol;

    event ProductListed(
        address indexed to,
        uint256 tokenId,
        string name,
        uint256 price,
        uint256 quantity,
        uint256 timestamp
    );

    event ProductPurchased(
        address indexed buyer,
        uint256 tokenId,
        uint256 escrowId,
        uint256 quantity,
        uint256 timestamp
    );

    // Constructor takes in a store name and ID as arguments
    constructor(
        string memory _storeName,
        string memory _storeId,
        address _escrow
    ) ERC1155("") {
        name = _storeName;
        symbol = _storeId;
        escrow = _escrow;
        transferOwnership(tx.origin);
    }

    // Function that allows the contract owner to list a new product for sale
    function listProductForSale(
        address _to,
        uint256 _tokenId,
        string memory _name,
        uint256 _price,
        uint256 _quantity,
        string memory _uri
    ) public onlyOwner {
        // Create a new Product struct with the given name, price, and seller address
        Product memory _item = Product(_name, _price, _to);
        // Associate the product with the given token ID in the mapping
        tokenIdToProducts[_tokenId] = _item;
        // Mint new ERC1155 tokens to the given address
        _mint(_to, _tokenId, _quantity, "");
        _setUri(_tokenId, _uri);
        emit ProductListed(
            _to,
            _tokenId,
            _name,
            _price,
            _quantity,
            block.timestamp
        );
    }

    // Function that allows a user to purchase a product with the given token ID using required amount of paymentToken
    function purchaseProduct(uint256 _tokenId, uint256 _quantity) public {
        // Retrieve the product associated with the given token ID
        Product memory _item = tokenIdToProducts[_tokenId];
        // Calculate escrow deadline
        uint256 _escrowDeadline = block.timestamp + ESCROW_LENGTH;
        // Enter escrow
        uint256 _escrowId = Escrow(escrow).enterEscrow(
            symbol,
            _tokenId,
            _item.price * _quantity,
            _escrowDeadline,
            msg.sender,
            _item.seller
        );
        // Transfer ownership of the ERC1155 tokens from the seller to the buyer
        _safeTransferFrom(_item.seller, msg.sender, _tokenId, _quantity, "");
        emit ProductPurchased(
            msg.sender,
            _tokenId,
            _escrowId,
            _quantity,
            block.timestamp
        );
    }

    function _setUri(uint256 _tokenId, string memory _uri) internal {
        tokenURIs[_tokenId] = _uri;
    }

    // the following function returns metadata uri for the given tokenId
    function uri(uint256 _tokenId) override public view returns (string memory) {
        return tokenURIs[_tokenId];
    }
}
