
const SeccionCliente3 = () => {
    return (
        <>
            <div style={{ display: 'flex', height: 'calc(80vh - 64px)', alignItems: 'center' }}>
                {/* Columna izquierda con textos */}
                <div className="flex flex-col mr-8">
                    <div className="mb-2">
                        <p className="text-lg">Texto 1</p>
                        <p className="text-lg">Texto 2</p>
                    </div>
                    <div className="mb-2">
                        <p className="text-lg">Texto 3</p>
                        <p className="text-lg">Texto 4</p>
                    </div>
                </div>

                {/* Columna derecha con imagen y botón */}
                <div>
                    <img src="tu_imagen.jpg" alt="Imagen" className="mb-4" />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Botón</button>
                </div>

            </div>
        </>
    );
};

export { SeccionCliente3 };
