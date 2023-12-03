import billetera from '../../images/billetera.png';
import blockchain from '../../images/blockchain.png';

const LandingPage = () => {
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
                    <button className="bg-lightgreen text-white px-20 py-2 text-3xl rounded-lg border border-blackgreen" style={estiloBotones}>
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