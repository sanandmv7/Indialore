// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "./Store.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract IndialoreMarketplace {
    using Strings for uint256;
    mapping(address=>bool) isSeller;

    mapping(address=>Store) sellerToStore;

    uint256 currentStoreId = 0;

    modifier onlySellers() {
        require(isSeller[msg.sender], "caller is not a seller");
        _;
    }

    function registerSeller() external {
        isSeller[msg.sender] = true;
    }

    function createStore(string memory _storeName) external onlySellers {
        require(address(sellerToStore[msg.sender]) == address(0), "Only one store per seller is allowed");
        string memory _storeId = string.concat("IL", currentStoreId.toString());
        Store store = new Store(_storeName, _storeId);
        sellerToStore[msg.sender] = store;
        currentStoreId++;
    }
}