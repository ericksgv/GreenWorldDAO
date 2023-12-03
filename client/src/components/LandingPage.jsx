import billetera from '../../images/billetera.png';
import blockchain from '../../images/blockchain.png';
import Web3 from 'web3';

const LandingPage = () => {

    const connectMetamask = async () => {
        if (window.ethereum) {
            try {
                // Check if the user is already connected
                const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    
                if (accounts.length > 0) {
                    // User is already connected
                    console.log('Metamask is already connected. Account:', accounts[0]);
                    // You can perform additional actions here if needed


                    // Initialize web3.js
                const web3 = new Web3(window.ethereum);

                // Fetch the account balance
                const balance = await web3.eth.getBalance(accounts[0]);

                // Convert the balance from wei to ether using web3.utils.fromWei
                const etherBalance = web3.utils.fromWei(balance, 'ether');
                
                // Display a toast message
                console.log(`Balance: ${etherBalance} ETH`);

                } else {
                    // Request account access
                    const newAccounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    
                    // Handle the new accounts
                    console.log('Connected to Metamask. New Account:', newAccounts[0]);
                    //console.log('Ya te encuentras conectado a Metamask. Da click en la extensión de Metamask para ver tu cuenta.');
                    // You can perform additional actions here if needed
                }
            } catch (error) {
                // Handle errors or user rejection
                console.error('Metamask connection error:', error);
            }
        } else {
            //console.log("Metamask is not installed. Please install Metamask to use this feature.");
        }
    };


    const estiloBotones = {
        color: '#053126',
        textAlign: 'center',
        fontFamily: 'Rakkas',
        fontWeight: 'bold',
    };

    const estiloparrafo = {
        color: '#4C894F',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        fontFamily: 'Rakkas',
        fontWeight: 'bold',
    };


    return (
        <>
            <div className="flex flex-wrap items-center justify-center mt-8 p-4 bg-white">
                <div className="mb-4 px-24 ">
                    <img
                        src={billetera}
                        alt="Primera Imagen"
                        className="mb-4 ml-14"
                        style={{ width: '25vh', height: 'auto' }}
                    />
                    <button
                    className="bg-lightgreen text-white px-20 py-2 text-3xl rounded-lg border border-blackgreen"
                    style={estiloBotones}
                    onClick={connectMetamask}
                    >
                        Cliente
                    </button>
                </div>

                <div className="mb-4 px-28" >
                    <img
                        src={blockchain}
                        alt="Segunda Imagen"
                        className="mb-4 ml-14 "
                        style={{ width: '25vh', height: 'auto' }}
                    />
                    <button className="bg-lightgreen text-white px-20 py-2 text-3xl rounded-lg border border-blackgreen" style={estiloBotones}>
                        Productor
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center ">
                <p className="text-3xl" style={estiloparrafo}>Siente la Magia de la Naturaleza con Green World</p>
            </div>

            <div className="flex justify-center">
                <div className="bg-lightgreen rounded-lg overflow-hidden shadow-md m-4 p-6 w-60 justify-center items-center flex">
                    <h2 className="text-xl font-bold mb-4 text-center">Genera ingresos mientras adoptas un estilo de vida ecoamigable</h2>
                </div>

                <div className="bg-lightgreen rounded-lg overflow-hidden shadow-md m-4 p-6 w-60 justify-center items-center flex">
                    <h2 className="text-xl font-bold mb-4 text-center">Monetiza tu compromiso con lo sostenible</h2>
                </div>

                <div className="bg-lightgreen rounded-lg overflow-hidden shadow-md m-4 p-6 w-60 justify-center items-center flex">
                    <h2 className="text-xl font-bold mb-4 text-center">Productos que cuidan, beneficios que perduran</h2>
                </div>
            </div>

           
        </>
    )
}

export default LandingPage;