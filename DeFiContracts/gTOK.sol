// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.15;

import "./safeMath.sol";
import "./ERC20Interface.sol";

contract gTOK is ERC20Interface, safeMath {
    string public symbol;
    string public name;
    uint8 public decimals;
    uint private _totalSupply;  // Variable para llevar registro del suministro total

    // Nuevas adiciones para mantener el registro de los titulares de tokens
    address[] private tokenHolders;
    mapping (address => bool) private isTokenHolder;

    mapping(address => uint) balances;
    mapping(address => mapping(address => uint)) allowed;

    constructor() {
        symbol = "gTOK";
        name = "Green Token";
        decimals = 3; // Ajusta los decimales según sea necesario
        _totalSupply = 0;  // Inicializa el suministro total
    }

    function totalSupply() public view override returns (uint) {
        return _totalSupply;
    }

    function mint(address to, uint tokens) public {
        // Aquí deberías agregar lógica para asegurarte de que solo el contrato StoreWallet puede llamar a esta función
        updateTokenHolders(to);
        balances[to] = safeAdd(balances[to], tokens);
        _totalSupply = safeAdd(_totalSupply, tokens);  // Actualiza el suministro total
        emit Transfer(address(0), to, tokens);
    }
    function balanceOf(address tokenOwner) public view returns (uint balance) {
        return balances[tokenOwner];
    }

    function transfer(address to, uint tokens) public returns (bool success) {
        updateTokenHolders(to);
        balances[msg.sender] = safeSub(balances[msg.sender], tokens);
        balances[to] = safeAdd(balances[to], tokens);
        emit Transfer(msg.sender, to, tokens);
        return true;
    }

    function approve(address spender, uint tokens) public returns (bool success) {
        allowed[msg.sender][spender] = tokens;
        emit Approval(msg.sender, spender, tokens);
        return true;
    }

    function transferFrom(address from, address to, uint tokens) public returns (bool success) {
        updateTokenHolders(to);
        balances[from] = safeSub(balances[from], tokens);
        allowed[from][msg.sender] = safeSub(allowed[from][msg.sender], tokens);
        balances[to] = safeAdd(balances[to], tokens);
        emit Transfer(from, to, tokens);
        return true;
    }

    // Función para actualizar la lista de titulares de tokens
    function updateTokenHolders(address _user) private {
        if (!isTokenHolder[_user]) {
            tokenHolders.push(_user);
            isTokenHolder[_user] = true;
        }
    }

    function allowance(address tokenOwner, address spender) public view returns (uint remaining) {
        return allowed[tokenOwner][spender];
    }
    // Función para obtener la lista de titulares de tokens
    function getTokenHolders() public view returns (address[] memory) {
        return tokenHolders;
    }
    
}