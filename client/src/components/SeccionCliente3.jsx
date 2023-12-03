import planeta from '../../images/planeta.png';
const SeccionCliente3 = () => {

    const estilotitulo = {
        color: '#053126',
        textalign: 'center',
        fontfamily: 'Rakkas',
        fontWeight: 'bold',
    };

    const estilobotones2 = {
        color: '#CBE9D2',
        textAlign: 'center',
        fontFamily: 'Rakkas',
        fontWeight: 'bold',
      };

    return (
        <>
            <div style={{ display: 'flex', height: 'calc(80vh - 64px)', alignItems: 'center' }}>
                {/* Columna izquierda con textos */}
                <div className="flex flex-col mr-8 ml-8 mt-24">
                    <div className="mb-12">
                        <div className="flex">
                            <p className="text-4xl" style={estilotitulo}>Acumulado:</p>
                            <p className="text-4xl ml-2 border border-black rounded-xl px-24 py-2" style={estilotitulo}>Texto 2</p>
                        </div>
                    </div>
                    <div className="mb-12">
                        <div className="flex">
                            <p className="text-4xl" style={estilotitulo}>Porcentaje:</p>
                            <p className="text-4xl ml-2 border border-black rounded-xl px-24 py-2" style={estilotitulo}>Texto 2</p>
                        </div>
                    </div>
                    <div className="mb-12">
                        <div className="flex">
                            <p className="text-4xl" style={estilotitulo}>Recompensa Actual:</p>
                            <p className="text-4xl ml-2 border border-black rounded-xl px-24 py-2" style={estilotitulo}>Texto 2</p>
                        </div>
                    </div>
                    <div className="mb-12">
                        <div className="flex">
                            <p className="text-4xl" style={estilotitulo}>Total:</p>
                            <p className="text-4xl ml-2 border border-black rounded-xl px-24 py-2" style={estilotitulo}>Texto 2</p>
                        </div>
                    </div>
                </div>

                {/* Columna derecha con imagen y botón */}
                <div className="flex ml-60">
                    <div className="flex flex-col items-center">
                        <img src={planeta} alt="Imagen" className="mb-4" style={{ width: '45vh', height: 'auto', }}/>
                        <button className="bg-blackgreen text-white px-24 py-2 rounded-full border border-blackgreen" style={estilobotones2}>Reclamar</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export { SeccionCliente3 };
