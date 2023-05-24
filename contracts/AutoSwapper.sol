// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "./interfaces/ITokenManagerERC20.sol";
import "./interfaces/IMessageReceiver.sol";
import "./interfaces/IRubyRouter.sol";

contract AutoSwapper is IMessageReceiver {
    
    ITokenManagerERC20 public proxy = ITokenManagerERC20(0xD2aAA00500000000000000000000000000000000);
    IRubyRouter public router;

    mapping(address => mapping(IERC20 => uint256)) public balances;

    constructor(
        IRubyRouter _router
    ) {
        router = _router;
    }

    function postMessage(
        bytes32 schainHash,
        address sender,
        bytes calldata data
    ) external {
        
    }
    
}
