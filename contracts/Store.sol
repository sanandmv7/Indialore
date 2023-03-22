// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Store is ERC721, Ownable {
    struct Product {
        string name;
        uint256 price;
        address seller;
    }

    mapping(uint256=>Product) tokenIdToProducts;

    constructor(string memory _storeName, string memory _storeId) ERC721(_storeName, _storeId) {}

    function listProductForSale(address _to, uint256 _tokenId, string memory _name, uint256 _price) public onlyOwner {
        Product memory _item = Product(_name, _price, _to);
        tokenIdToProducts[_tokenId] = _item;
        _safeMint(_to, _tokenId);
    }

    function purchaseProduct(uint256 _tokenId) public payable {
        Product memory _item = tokenIdToProducts[_tokenId];
        require(msg.value == _item.price, "price doesn't match");
        _transfer(_item.seller, msg.sender, _tokenId);
    }
}