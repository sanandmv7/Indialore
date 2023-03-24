// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

// Importing the ERC721, Ownable contracts from OpenZeppelin
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
// Importing the Escrow contract
import "./Escrow.sol";

// Contract "Store" inherits from ERC721 and Ownable
contract Store is ERC721, Ownable {
    // "Product" struct to represent a product for sale
    struct Product {
        string name; // Name of the product
        uint256 price; // Price of the product
        address seller; // Address of the seller who listed the product for sale
    }

    // Length of escrow post which escrow will be realeased to seller if buyer doesn't confirm delivery
    uint256 ESCROW_LENGTH = 24 weeks;

    // Mapping from token IDs to the products they represent
    mapping(uint256 => Product) tokenIdToProducts;

    // Address of the escrow contract
    address immutable escrow;

    // Constructor takes in a store name and ID and passes them to the ERC721 constructor
    constructor(
        string memory _storeName,
        string memory _storeId,
        address _escrow
    ) ERC721(_storeName, _storeId) {
        escrow = _escrow;
    }

    // Function that allows the contract owner to list a new product for sale
    function listProductForSale(
        address _to,
        uint256 _tokenId,
        string memory _name,
        uint256 _price
    ) public onlyOwner {
        // Create a new Product struct with the given name, price, and seller address
        Product memory _item = Product(_name, _price, _to);
        // Associate the product with the given token ID in the mapping
        tokenIdToProducts[_tokenId] = _item;
        // Mint a new ERC721 token to the given address
        _safeMint(_to, _tokenId);
    }

    // Function that allows a user to purchase a product with the given token ID using required amount of paymentToken
    function purchaseProduct(uint256 _tokenId) public {
        require(_exists(_tokenId), "Product does not exist");
        // Retrieve the product associated with the given token ID
        Product memory _item = tokenIdToProducts[_tokenId];
        // Calculate escrow deadline
        uint256 _escrowDeadline = block.timestamp + ESCROW_LENGTH; 
        // Enter escrow
        Escrow(escrow).enterEscrow(
            symbol(),
            _tokenId,
            _item.price,
            _escrowDeadline,
            msg.sender,
            _item.seller
        );
        // Transfer ownership of the ERC721 token from the seller to the buyer
        _transfer(_item.seller, msg.sender, _tokenId);
    }
}
