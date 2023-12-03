import { useState, useEffect } from 'react';
import tokenABI from '../libs/tokensABI';
import Web3 from 'web3';

const NavCuarta = () => {
  const [celoBalance, setCeloBalance] = useState(0);

  const estilotitulo = {
    color: '#2D2D2D',
    textAlign: 'center',
    fontFamily: 'Rakkas',
    fontWeight: 'bold',
  };

  const estilobotones = {
    color: '#053126',
    textAlign: 'center',
    fontFamily: 'Rakkas',
    fontWeight: 'bold',
  };

  const estilobotones2 = {
    color: '#CBE9D2',
    textAlign: 'center',
    fontFamily: 'Rakkas',
    fontWeight: 'bold',
  };

  const ethEnabled = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();
        return web3;
      } catch (e) {
        return null;
      }
    }
    return null;
  };

  const connectMetamask = async () => {
    const web3 = await ethEnabled();
    if (!web3) {
      alert('Please install MetaMask to use this dApp!');
      return;
    }

    const accounts = await web3.eth.getAccounts();
    const userAccount = accounts[0];

    // Obtener saldo de CELO
    const celoBalance = await web3.eth.getBalance(userAccount);
    setCeloBalance(web3.utils.fromWei(celoBalance, 'ether'));

    // Obtener saldos de tokens
    const tokenAddresses = [
      '0xA3A5Eb1f7E32E694d2d7653aC7866a63d1916543' //cUSD
    ];

    for (const tokenAddress of tokenAddresses) {
      const tokenInst = new web3.eth.Contract(tokenABI, tokenAddress);
      const tokenBalance = await tokenInst.methods.balanceOf(userAccount).call();
      const formattedTokenBalance = Number(tokenBalance) / 1000;
      //const tokenBalanceInEther = web3.utils.fromWei(tokenBalance, 'ether');
      console.log(`Token Balance for ${tokenAddress}: ${formattedTokenBalance}`);
      setCeloBalance(formattedTokenBalance)
    }
  };

  useEffect(() => {
    connectMetamask();
  }, []);

  return (
    <header className="bg-lightgreen text-white p-8 flex items-center justify-between">
      <div>
        <h1 className="text-5xl font-bold ml-48" style={estilotitulo}>
          Canjea
        </h1>
      </div>
      <div className="flex space-x-9">
        <button className="bg-lightgreen px-24 py-2 rounded border border-blackgreen" style={estilobotones}>
          {`0 gTk`}
        </button>
        <button className="bg-lightgreen text-white px-24 py-2 rounded border border-blackgreen" style={estilobotones}>
          {`${celoBalance} cUSD`}
        </button>
        <button className="bg-blackgreen text-white px-24 py-2 rounded border border-blackgreen" style={estilobotones2}>
          Connect Metamask
        </button>
      </div>
    </header>
  );
};

export { NavCuarta };