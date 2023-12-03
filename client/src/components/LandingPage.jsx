import billetera from '../../images/billetera.png';
import blockchain from '../../images/blockchain.png';

const LandingPage = () => {
    const estiloBotones = {
        color: '#053126',
        textAlign: 'center',
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
        </>
    )
}

export default LandingPage;