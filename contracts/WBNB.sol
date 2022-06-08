// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract WBNB is
    ERC20("Wrapped BNB", "WBNB"),
    ERC20Burnable,
    ERC20Capped,
    AccessControl {

    constructor (uint256 _cap) ERC20Capped(_cap) {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function _mint(address _to, uint256 _amount) internal override(ERC20, ERC20Capped) {
        super._mint(_to, _amount);
    }

    function mint(address _to, uint256 _amount) public onlyRole(DEFAULT_ADMIN_ROLE) {
        _mint(_to, _amount);
    }

    function grantAdminRole(address _account) public onlyRole(DEFAULT_ADMIN_ROLE) {
        grantRole(DEFAULT_ADMIN_ROLE, _account);
    }
}
