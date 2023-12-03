// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.15;

import "./safeMath.sol";
import "./gTOK.sol";
import "./cUSD.sol";

contract EthDistributor {
    gTOK public gToken;
    cUSD public cToken;
    safeMath public math; // Instancia de safeMath

    address[] private beneficiaries;
    mapping(address => bool) private isBeneficiary;
    mapping(address => uint256) public beneficiaryReceived;
    uint256 public totalReceivedTokens;

    constructor(address _gTokenAddress, address _cTokenAddress) {
        gToken = gTOK(_gTokenAddress);
        cToken = cUSD(_cTokenAddress);
        math = new safeMath(); // Crear una nueva instancia de safeMath
    }

    // Función para depositar cUSD en el contrato
    function depositTokens(uint256 amount) external {
        require(cToken.transferFrom(msg.sender, address(this), amount), "Transfer failed");
        totalReceivedTokens = math.safeAdd(totalReceivedTokens, amount);
    }

    // Función para distribuir cUSD basado en gTOK
    function distributeTokens() public {
        uint256 totalTokens = gToken.totalSupply();
        address[] memory holders = gToken.getTokenHolders();

        // Calcula el 5% del total recibido
        uint256 fivePercentOfTotal = math.safeDiv(math.safeMul(totalReceivedTokens, 5), 100);

        for (uint i = 0; i < holders.length; i++) {
            uint256 holderTokens = gToken.balanceOf(holders[i]);
            if(holderTokens > 0){
                // Distribuye una parte del 5% en función de la cantidad de gTOK que posea cada usuario
                uint256 distributionAmount = math.safeDiv(math.safeMul(fivePercentOfTotal, holderTokens), totalTokens);
                require(cToken.transfer(holders[i], distributionAmount), "Token transfer failed");
                beneficiaryReceived[holders[i]] = math.safeAdd(beneficiaryReceived[holders[i]], distributionAmount);
            }
        }
    }

    // Consulta el total recibido por un beneficiario
    function getReceivedAmount(address _beneficiary) public view returns (uint256) {
        return beneficiaryReceived[_beneficiary];
    }
}
