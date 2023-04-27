// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

// import IERC20 and SafeERC20 contracts from OpenZeppelin
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract Escrow {
    // Using SafeERC20 for IERC20 to safely handle ERC20 tokens
    using SafeERC20 for IERC20;

    // Counter to keep track of current escrow Id
    uint256 currentEscrowId;

    // Struct to keep track of Escrow details
    struct EscrowDetails {
        string storeId;
        uint256 productId;
        uint256 amount;
        uint256 deadline;
        address buyer;
        address seller;
        bool deliveryConfirmed;
    }

    // Mapping to keep track of Escrow details for each Escrow Id
    mapping(uint256 => EscrowDetails) public escrowDetails;

    // Address of the payment token
    address public immutable paymentToken;

    event EscrowCreated(
        string indexed storeId,
        uint256 productId,
        uint256 amount,
        uint256 deadline,
        address indexed buyer,
        address indexed seller,
        uint256 timestamp
    );

    event DeliveryConfirmed(uint256 escrowId, uint256 timestamp);

    event EscrowReleased(uint256 escrowId, uint256 timestamp);

    // Constructor sets the payment token
    constructor(address _paymentToken) {
        paymentToken = _paymentToken;
    }

    // Function to create a new Escrow
    function enterEscrow(
        string memory _storeId,
        uint256 _productId,
        uint256 _amount,
        uint256 _deadline,
        address _buyer,
        address _seller
    ) external returns (uint256 _escrowId) {
        // Create a new Escrow with given details
        EscrowDetails memory _escrowDetails = EscrowDetails(
            _storeId,
            _productId,
            _amount,
            _deadline,
            _buyer,
            _seller,
            false
        );
        _escrowId = currentEscrowId;
        // Assign Escrow details to the new Escrow Id
        escrowDetails[currentEscrowId++] = _escrowDetails;
        // Transfer the payment to escrow
        IERC20(paymentToken).safeTransferFrom(_buyer, address(this), _amount);

        emit EscrowCreated(_storeId, _productId, _amount, _deadline, _buyer, _seller, block.timestamp);
    }

    // Function to confirm delivery by the buyer
    function confirmDelivery(uint256 _escrowId) external {
        // Get Escrow details using Escrow Id
        EscrowDetails memory _escrowDetails = escrowDetails[_escrowId];
        // Check if caller is the buyer of the product
        require(
            msg.sender == _escrowDetails.buyer,
            "Caller is not the buyer of the product"
        );
        // Check if delivery is not already confirmed
        require(
            !_escrowDetails.deliveryConfirmed,
            "Delivery already confirmed"
        );
        // Mark delivery as confirmed
        escrowDetails[_escrowId].deliveryConfirmed = true;
        // Transfer payment to the seller
        IERC20(paymentToken).safeTransfer(
            _escrowDetails.seller,
            _escrowDetails.amount
        );

        emit DeliveryConfirmed(_escrowId, block.timestamp);
    }

    // Function to release Escrow to the seller after deadline
    function releaseEscrowToSellerPostDeadline(uint256 _escrowId) external {
        // Get Escrow details using Escrow Id
        EscrowDetails memory _escrowDetails = escrowDetails[_escrowId];

        // Check if deadline has been reached
        require(
            block.timestamp > _escrowDetails.deadline,
            "Deadline not reached yet"
        );

        // Check if delivery is not already confirmed
        require(
            !_escrowDetails.deliveryConfirmed,
            "Delivery already confirmed"
        );

        // Mark delivery as confirmed
        escrowDetails[_escrowId].deliveryConfirmed = true;
        
        // Transfer payment to the seller
        IERC20(paymentToken).safeTransfer(
            _escrowDetails.seller,
            _escrowDetails.amount
        );

        emit EscrowReleased(_escrowId, block.timestamp);
    }
}
