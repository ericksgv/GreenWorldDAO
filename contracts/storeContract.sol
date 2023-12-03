// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.15;

import "./ERC20Interface.sol";
import "./gTOK.sol";

// StoreWallet Contract
contract StoreWallet {
    address private owner;
    mapping(address => bool) public authorizedUsers;

    event Deposit(address indexed token, address indexed from, uint256 amount);
    event Withdraw(address indexed to, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    modifier onlyAuthorized() {
        require(authorizedUsers[msg.sender], "Not an authorized user");
        _;
    }

    
    gTOK public greenTokenContract;

    constructor(address _greenTokenAddress) {
        owner = msg.sender;
        authorizedUsers[owner] = true;
        greenTokenContract = gTOK(_greenTokenAddress); // Inicializa con la dirección del contrato gTOK
    }

    function addAuthorizedUser(address _user) public onlyOwner {
        authorizedUsers[_user] = true;
    }

    function removeAuthorizedUser(address _user) public onlyOwner {
        authorizedUsers[_user] = false;
    }

    function depositERC20(address _token, uint256 _amount) public {
        require(ERC20Interface(_token).transferFrom(msg.sender, address(this), _amount), "Transfer failed");
        emit Deposit(_token, msg.sender, _amount);

        // Mint gTOK tokens
        uint256 gTOKAmount = _amount / 100; // Factor de remuneración 100:1
        greenTokenContract.mint(msg.sender, gTOKAmount);
    }

    function withdrawERC20(address _token, uint256 _amount) public onlyAuthorized {
        require(ERC20Interface(_token).balanceOf(address(this)) >= _amount, "Insufficient balance");
        require(ERC20Interface(_token).transfer(msg.sender, _amount), "Transfer failed");
        emit Withdraw(msg.sender, _amount);
    }

    function balanceOfERC20(address _token) public view returns (uint256) {
        return ERC20Interface(_token).balanceOf(address(this));
    }
}
