// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

// Importing the Store contract
import "./Store.sol";
// Importing the IndialorePaymentToken contract
import "./IndialorePaymentToken.sol";
// Importing Strings from OpenZeppelin
import "@openzeppelin/contracts/utils/Strings.sol";

// Contract "IndialoreMarketplace"
contract IndialoreMarketplace {
    // Using the Strings library for string manipulation on uint256 variables
    using Strings for uint256;

    // Mapping to keep track of which addresses are sellers
    mapping(address => bool) public isSeller;

    // Mapping to keep track of which seller owns which store
    mapping(address => Store) public sellerToStore;

    // Counter to keep track of the number of stores created
    uint256 currentStoreId = 0;

    // Payment token contract
    IndialorePaymentToken public immutable paymentToken;

    // Escrow contract
    Escrow public immutable escrow;

    // Modifier to restrict access to functions to only sellers
    modifier onlySellers() {
        require(isSeller[msg.sender], "caller is not a seller");
        _;
    }

    event SellerRegistered(address seller, uint timestamp);
    event StoreCreated(string storeId, address seller, uint timestamp);

    constructor(address _paymentTokenAddress) {
        paymentToken = IndialorePaymentToken(_paymentTokenAddress);
        escrow = new Escrow(_paymentTokenAddress);
    }

    // Function to register a seller
    function registerSeller() external {
        // Mark the caller's address as a seller
        isSeller[msg.sender] = true;
        emit SellerRegistered(msg.sender, block.timestamp);
    }

    // Function to create a new store for the caller
    function createStore(string memory _storeName) external onlySellers returns(string memory _storeId) {
        // Ensure that the seller doesn't already have a store
        require(
            address(sellerToStore[msg.sender]) == address(0),
            "Only one store per seller is allowed"
        );
        // Generate a unique store ID based on the current store ID counter
        _storeId = string.concat("IL", currentStoreId.toString());
        // Create a new Store contract with the given name and store ID
        Store store = new Store(_storeName, _storeId, address(escrow));
        // Associate the new Store contract with the seller's address
        sellerToStore[msg.sender] = store;
        // Increment the store ID counter
        currentStoreId++;
        emit StoreCreated(_storeId, msg.sender, block.timestamp);
    }
}
