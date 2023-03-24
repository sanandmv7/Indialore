// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

// import IERC20 and SafeERC20 contracts from OpenZeppelin
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract Escrow {
    using SafeERC20 for IERC20;

    uint256 currentEscrowId;

    struct EscrowDetails {
        string storeId;
        uint256 productId;
        uint256 amount;
        uint256 deadline;
        address buyer;
        address seller;
        bool deliveryConfirmed;
    }

    // EscrowId => Details
    mapping(uint256 => EscrowDetails) escrowDetails;

    // Address of the payment token
    address public immutable paymentToken;

    constructor(address _paymentToken) {
        paymentToken = _paymentToken;
    }

    function enterEscrow(
        string memory _storeId,
        uint256 _productId,
        uint256 _amount,
        uint256 _deadline,
        address _buyer,
        address _seller
    ) external {
        EscrowDetails memory _escrowDetails = EscrowDetails(
            _storeId,
            _productId,
            _amount,
            _deadline,
            _buyer,
            _seller,
            false
        );
        escrowDetails[currentEscrowId++] = _escrowDetails;
        // Transfer the payment to escrow
        IERC20(paymentToken).safeTransferFrom(_buyer, address(this), _amount);
    }

    function confirmDelivery(uint256 _escrowId) external {
        EscrowDetails memory _escrowDetails = escrowDetails[_escrowId];
        require(msg.sender == _escrowDetails.buyer, "Caller is not the buyer of the product");
        require(!_escrowDetails.deliveryConfirmed, "Delivery already confirmed");
        escrowDetails[_escrowId].deliveryConfirmed = true;
        IERC20(paymentToken).safeTransfer(_escrowDetails.seller, _escrowDetails.amount);
    }

    function releaseEscrowToSellerPostDeadline(uint256 _escrowId) external {
        EscrowDetails memory _escrowDetails = escrowDetails[_escrowId];
        require(block.timestamp > _escrowDetails.deadline, "Deadline not reached yet");
        require(!_escrowDetails.deliveryConfirmed, "Delivery already confirmed");
        escrowDetails[_escrowId].deliveryConfirmed = true;
        IERC20(paymentToken).safeTransfer(_escrowDetails.seller, _escrowDetails.amount);
    }
}
