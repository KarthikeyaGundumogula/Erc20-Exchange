// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openeppelin";

contract MyToken is ERC20 {
    constructor() ERC20("MyToken", "MTK") {}

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}
