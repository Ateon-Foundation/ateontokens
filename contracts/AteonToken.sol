// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AteonToken is ERC20, ERC20Permit, Ownable {
    constructor() ERC20("AteonToken", "ATN") ERC20Permit("AteonToken") {
        _mint(msg.sender, 946073047 * 10 ** decimals());
    }
}
