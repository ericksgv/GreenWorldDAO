// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.15;

// Safe Math Interface
contract SafeMath {
    function safeAdd(uint a, uint b) public pure returns (uint c) {
        c = a + b;
        require(c >= a);
    }

    function safeSub(uint a, uint b) public pure returns (uint c) {
        require(b <= a);
        c = a - b;
    }

    function safeMul(uint a, uint b) public pure returns (uint c) {
        c = a * b;
        require(a == 0 || c / a == b);
    }

    function safeDiv(uint a, uint b) public pure returns (uint c) {
        require(b > 0);
        c = a / b;
    }
}

// ERC Token Standard #20 Interface
interface ERC20Interface {
    function totalSupply() external view returns (uint);
    function balanceOf(address tokenOwner) external view returns (uint balance);
    function allowance(address tokenOwner, address spender) external view returns (uint remaining);
    function transfer(address to, uint tokens) external returns (bool success);
    function approve(address spender, uint tokens) external returns (bool success);
    function transferFrom(address from, address to, uint tokens) external returns (bool success);

    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
}

// Token Contract
contract cUSD is ERC20Interface, SafeMath {
    string public symbol;
    string public  name;
    uint8 public decimals;
    uint public _totalSupply;

    mapping(address => uint) balances;
    mapping(address => mapping(address => uint)) allowed;

    constructor() {
        symbol = "cUSD";
        name = "CeloUSD";
        decimals = 3;
        _totalSupply = 100000;
        balances[msg.sender] = _totalSupply;
        emit Transfer(address(0), msg.sender, _totalSupply);
    }

    function totalSupply() public view returns (uint) {
        return _totalSupply - balances[address(0)];
    }

    function balanceOf(address tokenOwner) public view returns (uint balance) {
        return balances[tokenOwner];
    }

    function transfer(address to, uint tokens) public returns (bool success) {
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
        balances[from] = safeSub(balances[from], tokens);
        allowed[from][msg.sender] = safeSub(allowed[from][msg.sender], tokens);
        balances[to] = safeAdd(balances[to], tokens);
        emit Transfer(from, to, tokens);
        return true;
    }

    function allowance(address tokenOwner, address spender) public view returns (uint remaining) {
        return allowed[tokenOwner][spender];
    }
}

contract gTOK is ERC20Interface, SafeMath {
    string public symbol;
    string public name;
    uint8 public decimals;
    uint private _totalSupply;  // Variable para llevar registro del suministro total

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
        balances[to] = safeAdd(balances[to], tokens);
        _totalSupply = safeAdd(_totalSupply, tokens);  // Actualiza el suministro total
        emit Transfer(address(0), to, tokens);
    }
    function balanceOf(address tokenOwner) public view returns (uint balance) {
        return balances[tokenOwner];
    }

    function transfer(address to, uint tokens) public returns (bool success) {
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
        balances[from] = safeSub(balances[from], tokens);
        allowed[from][msg.sender] = safeSub(allowed[from][msg.sender], tokens);
        balances[to] = safeAdd(balances[to], tokens);
        emit Transfer(from, to, tokens);
        return true;
    }

    function allowance(address tokenOwner, address spender) public view returns (uint remaining) {
        return allowed[tokenOwner][spender];
    }

}


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
