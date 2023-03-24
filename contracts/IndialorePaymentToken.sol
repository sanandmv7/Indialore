// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

// Importing the ERC20, ERC20Burnable, and Ownable contracts from the OpenZeppelin library
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Contract "IndialorePaymentToken" inherits from ERC20, ERC20Burnable and Ownable
contract IndialorePaymentToken is ERC20, ERC20Burnable, Ownable {
    // Constructor function to initialize the token's name and symbol
    constructor() ERC20("IndialorePaymentToken", "IPT") {}

    // Function to allow the owner to mint new tokens
    function mint(address to, uint256 amount) public onlyOwner {
        // Mint the specified amount of tokens and assign them to the given address
        _mint(to, amount);
    }
}
