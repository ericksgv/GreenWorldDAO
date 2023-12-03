

const SeccionCliente2 = () => {
    return (
        <>
            <div style={{ display: 'flex', height: 'calc(80vh - 64px)', alignItems: 'center' }}>
                <div style={{ fontSize: '4em' }}>
                    {/* Aquí coloca el código o la imagen de la flecha hacia la izquierda */}
                    &#8592; {/* Puedes usar un símbolo de flecha o una imagen */}
                </div>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'space-around' }}>
                    <div className="border bg-blackgreen p-8 h-96 w-72">
                        <h3>{"Card 1"}</h3>
                        <p>{"Descripción de la Card 1"}</p>
                        {/* Puedes agregar más contenido y estilos según tus necesidades */}
                    </div>
                    <div className="border bg-blackgreen p-8 h-96 w-72">
                        <h3>{"Card 2"}</h3>
                        <p>{"Descripción de la Card 2"}</p>
                        {/* Puedes agregar más contenido y estilos según tus necesidades */}
                    </div>
                    <div className="border bg-blackgreen p-8 h-96 w-72">
                        <h3>{"Card 2"}</h3>
                        <p>{"Descripción de la Card 2"}</p>
                        {/* Puedes agregar más contenido y estilos según tus necesidades */}
                    </div>
                </div>
                <div style={{ fontSize: '4em' }}>
                    {/* Aquí coloca el código o la imagen de la flecha hacia la izquierda */}
                    &#8594; {/* Puedes usar un símbolo de flecha o una imagen */}
                </div>
            </div>
        </>
    );
};

export { SeccionCliente2 };
