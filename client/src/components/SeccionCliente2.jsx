import cepillo from '../../images/cepillo.png';
import { useState, useEffect } from 'react';
import vaso from '../../images/vaso.png';
import plato from '../../images/plato.png';
import contratoJSON from '../assets/json/storeContract.json';
import contratocUSDJSON from '../assets/json/cUSD.json';

import Web3 from 'web3';

const SeccionCliente2 = () => {

    const [contrato, setContrato] = useState(null);
    const [contratocUSD, setContratocUSD] = useState(null);

    useEffect(() => {
        const initContratos = async () => {
            const web3 = new Web3(window.ethereum);
            await window.ethereum.enable();

            const { address, abi } = contratoJSON;
            const contratoInstance = new web3.eth.Contract(abi, address);

            const cUSDAddress = "0xc7807933273c1fB06D0efB6381BF2F7b9F41ccC1"; // Reemplaza con la dirección correcta del token
            const cUSDAbi = contratocUSDJSON.abi;
            const contratocUSDInstance = new web3.eth.Contract(cUSDAbi, cUSDAddress);

            setContrato(contratoInstance);
            setContratocUSD(contratocUSDInstance);
        };

        initContratos();
    }, []);


    const estilotitulo = {
        color: '#CBE9D2',
        textalign: 'center',
        fontfamily: 'Rakkas',
        fontWeight: 'bold',
    };

    const estiloparrafo = {
        color: '#000',
        textalign: 'center',
        fontfamily: 'Rakkas',
        fontWeight: 'bold',
    };

const pay = async () => {
        try {
            if (!contrato || !contratocUSD) {
                throw new Error("Contratos no inicializados");
            }

            const tokenAddress = "0x8C47b45BCf743C677Ac4D8B8Bf6F97A2dc456f63";

            const web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
            const accounts = await web3.eth.getAccounts();
            const account = accounts[0];

            // Realizar la aprobación
            const approveAmount = web3.utils.toWei(1000000, "wei");
            await contratocUSD.methods.approve(contrato.options.address, approveAmount).send({ from: account });

            // Obtener la dirección del contrato cUSD del estado
            const cUSDAddress = contratocUSD.options.address;

            // Realizar el pago con el token cUSD
            await contrato.methods.depositERC20(cUSDAddress, web3.utils.toWei("1000", "wei")).send({ from: account });

            console.log(`Pago y depósito exitosos para el producto con dirección ${tokenAddress}`);
        } catch (error) {
            console.error("Error al procesar el pago:", error.message);
            console.error("Detalles de la transacción revertida:", error.transactionReceipt);
            console.error("Error al procesar el pago:", error.message);
        }
    };
    

    

    return (
        <>
            <div style={{ display: 'flex', height: 'calc(80vh - 64px)', alignItems: 'center' }}>
                <div style={{ fontSize: '4em' }}>
                    &#8592;
                </div>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'space-around' }}>
                    <div className="border bg-blackgreen p-8 h-96 w-72 rounded-2xl flex flex-col items-center justify-center text-center">
                        <h3 className="text-2xl pb-4" style={estilotitulo}>
                            {"Cepillo de Bambú"}
                        </h3>
                        <img
                            src={cepillo}
                            alt="Image 1"
                            className="mt-4" // Ajusta el margen superior según sea necesario
                            style={{ width: '20vh', height: 'auto' }}
                        />
                        <div className="flex flex-col items-center mt-4">
                            <div className="flex items-center justify-center mb-4">
                                <button className="text-lg mb-2 bg-green mr-2 rounded-lg p-2" onClick={pay}>
                                    <p className="text-lg mb-2 bg-green rounded-lg" style={estiloparrafo}>Paga</p>
                                    <p className="text-lg mb-2 bg-green rounded-lg" style={estiloparrafo}>10 cUSD</p>
                                </button>

                                <div className="text-lg mb-2 bg-grencarmel mr-2 rounded-lg p-2" >
                                    <p className="text-lg mb-2 bg-grencarmel rounded-lg" style={estiloparrafo}>Recibe</p>
                                    <p className="text-lg mb-2 bg-grencarmel rounded-lg" style={estiloparrafo}>0.1 gtk</p>                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border bg-blackgreen p-8 h-96 w-72 rounded-2xl flex flex-col items-center justify-center text-center">
                        <h3 className="text-2xl pb-4" style={estilotitulo}>{"Plato de hoja"}</h3>
                        <img src={plato} alt="Image 1" style={{ width: '30vh', height: 'auto', }} />
                        <div className="flex flex-col items-center mt-4">
                            <div className="flex items-center justify-center mb-4">
                            <button className="text-lg mb-2 bg-green mr-2 rounded-lg p-2" onClick={pay}>
                                    <p className="text-lg mb-2 bg-green rounded-lg" style={estiloparrafo}>Paga</p>
                                    <p className="text-lg mb-2 bg-green rounded-lg" style={estiloparrafo}>10 cUSD</p>
                                </button>
                                <div className="text-lg mb-2 bg-grencarmel mr-2 rounded-lg p-2" >
                                    <p className="text-lg mb-2 bg-grencarmel rounded-lg" style={estiloparrafo}>Recibe</p>
                                    <p className="text-lg mb-2 bg-grencarmel rounded-lg" style={estiloparrafo}>0.1 gtk</p>                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border bg-blackgreen p-8 h-96 w-72 rounded-e-3xl flex flex-col items-center justify-center text-center">
                        <h3 className="text-2xl pb-4" style={estilotitulo}>{"Vaso de carton"}</h3>
                        <img src={vaso} alt="Image 1" style={{ width: '30vh', height: 'auto', }} />
                        <div className="flex flex-col items-center mt-4">
                            <div className="flex items-center justify-center mb-4">
                            <button className="text-lg mb-2 bg-green mr-2 rounded-lg p-2" onClick={pay}>
                                    <p className="text-lg mb-2 bg-green rounded-lg" style={estiloparrafo}>Paga</p>
                                    <p className="text-lg mb-2 bg-green rounded-lg" style={estiloparrafo}>10 cUSD</p>
                                </button>
                                <div className="text-lg mb-2 bg-grencarmel mr-2 rounded-lg p-2" >
                                    <p className="text-lg mb-2 bg-grencarmel rounded-lg" style={estiloparrafo}>Recibe</p>
                                    <p className="text-lg mb-2 bg-grencarmel rounded-lg" style={estiloparrafo}>0.1 gtk</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ fontSize: '4em' }}>
                    &#8594;
                </div>
            </div>
        </>
    );
};

export { SeccionCliente2 };
