import cepillo from '../../images/cepillo.png';
import vaso from '../../images/vaso.png';
import plato from '../../images/plato.png';


const SeccionCliente2 = () => {
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
    
    }
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
                                    <p className="text-lg mb-2 bg-grencarmel rounded-lg" style={estiloparrafo}>+</p>
                                    <p className="text-lg mb-2 bg-grencarmel rounded-lg" style={estiloparrafo}>0.1 gtk</p>                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border bg-blackgreen p-8 h-96 w-72 rounded-2xl flex flex-col items-center justify-center text-center">
                        <h3 className="text-2xl pb-4" style={estilotitulo}>{"Plato de hoja"}</h3>
                        <img src={plato} alt="Image 1" style={{ width: '30vh', height: 'auto', }} />
                        <div className="flex flex-col items-center mt-4">
                            <div className="flex items-center justify-center mb-4">
                                <div className="text-lg mb-2 bg-green mr-2 rounded-lg p-2" >
                                    <p className="text-lg mb-2 bg-green rounded-lg" style={estiloparrafo}>Paga</p>
                                    <p className="text-lg mb-2 bg-green rounded-lg" style={estiloparrafo}>10 cUSD</p>
                                </div>
                                <div className="text-lg mb-2 bg-grencarmel mr-2 rounded-lg p-2" >
                                    <p className="text-lg mb-2 bg-grencarmel rounded-lg" style={estiloparrafo}>+</p>
                                    <p className="text-lg mb-2 bg-grencarmel rounded-lg" style={estiloparrafo}>0.1 gtk</p>                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border bg-blackgreen p-8 h-96 w-72 rounded-e-3xl flex flex-col items-center justify-center text-center">
                        <h3 className="text-2xl pb-4" style={estilotitulo}>{"Vaso de carton"}</h3>
                        <img src={vaso} alt="Image 1" style={{ width: '30vh', height: 'auto', }} />
                        <div className="flex flex-col items-center mt-4">
                            <div className="flex items-center justify-center mb-4">
                                <div className="text-lg mb-2 bg-green mr-2 rounded-lg p-2" >
                                    <p className="text-lg mb-2 bg-green rounded-lg" style={estiloparrafo}>Paga</p>
                                    <p className="text-lg mb-2 bg-green rounded-lg" style={estiloparrafo}>10 cUSD</p>
                                </div>
                                <div className="text-lg mb-2 bg-grencarmel mr-2 rounded-lg p-2" >
                                    <p className="text-lg mb-2 bg-grencarmel rounded-lg" style={estiloparrafo}>+</p>
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
