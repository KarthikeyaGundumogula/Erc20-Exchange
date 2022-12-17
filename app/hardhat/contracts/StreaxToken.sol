// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract StreaxToken is ERC20 {
    constructor() ERC20("StreaxToken", "STK") {}

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}
