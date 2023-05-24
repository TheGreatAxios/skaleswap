// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "../lib/RoutingUtils.sol";

interface IRubyRouter {

    function swap(SwapDetails calldata swapDetails) external returns (uint256 outputAmount);
}