import { useState, useEffect } from 'react';
import tokenABI from '../libs/tokensABI';
import Web3 from 'web3';
import { Link } from 'react-router-dom';

const NavSecundaria = () => {
  const [celoBalance, setCeloBalance] = useState(0);
  const [gTokBalance, setGtokBalance] = useState(0);

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
      alert('Por favor, instala MetaMask para usar esta dApp.');
      return;
    }

    const accounts = await web3.eth.getAccounts();
    const userAccount = accounts[0];

    // Obtener saldo de CELO
    const cUSDAddress = '0xc7807933273c1fB06D0efB6381BF2F7b9F41ccC1'; // Dirección de contrato de gTok
    const cUSDInst = new web3.eth.Contract(tokenABI, cUSDAddress);
    const cUSDBalanceWei = await cUSDInst.methods.balanceOf(userAccount).call();
    const formattedCeloBalance = Number(cUSDBalanceWei) / 1000;
    setCeloBalance(formattedCeloBalance);

    // Obtener saldo de gTok
    const gTokAddress = '0x494798D4D23917c5DaC8B63B57B1b415C8fAEB08'; // Dirección de contrato de gTok
    const gTokInst = new web3.eth.Contract(tokenABI, gTokAddress);
    const gTokBalanceWei = await gTokInst.methods.balanceOf(userAccount).call();
    const formattedGtokBalance = Number(gTokBalanceWei) / 1000;
    setGtokBalance(formattedGtokBalance);
  };

  useEffect(() => {
    connectMetamask();
  }, []);

  return (
    <header className="bg-lightgreen text-white p-8 flex items-center justify-between">
      <div className='flex'>
        <Link to="/">
          <div className="cursor-pointer " style={{ fontSize: '4em', color: '#053126' }}>
            &#8592;
          </div>
        </Link>
        <h1 className="text-5xl font-bold ml-24 mt-8" style={estilotitulo}>
          Servicios
        </h1>
      </div>
      <div className="flex space-x-9">
        <button className="bg-lightgreen px-24 py-2 rounded border border-blackgreen" style={estilobotones}>
          {`${gTokBalance} gTok`}
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

export { NavSecundaria };
