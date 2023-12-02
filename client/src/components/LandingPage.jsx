const LandingPage = () => {
    const estiloBotones = {
        color: '#053126',
        textAlign: 'center',
        fontFamily: 'Rakkas',
        fontSize: '48px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
    };

    return (
        <>
            <div className="flex flex-col items-center mt-8">
                <img
                    src="ruta_de_la_primera_imagen.jpg"
                    alt="Primera Imagen"
                    className="mb-4"
                    style={{ width: '200px', height: '200px' }}
                />
                <img
                    src="ruta_de_la_segunda_imagen.jpg"
                    alt="Segunda Imagen"
                    className="mb-4"
                    style={{ width: '200px', height: '200px' }}
                />
                <div className="mb-4">
                    <button className="bg-custom-green text-white px-6 py-2 mr-4" style={estiloBotones}>
                        Cliente
                    </button>
                    <button className="bg-custom-green text-white px-6 py-2" style={estiloBotones}>
                        Productor
                    </button>
                </div>
            </div>
        </>
    )
}

export default LandingPage;