import logo from '../../images/GreenLogoSinfondo.png';

const NavPrincipal = () => {
    const estiloTexto = {
        color: '#053126',
        fontFamily: 'Rakkas',
        fontWeight: 'bold',
    };

    return (
        <>
            <header className="flex items-center justify-center bg-green text-white py-2 text-5xl">
            <img
            src={logo}
            alt="Nueva Imagen"
            className="mb-4 ml-14"
            style={{ width: '10vh', height: 'auto' }}
        />
                <h1 style={estiloTexto}>Green World</h1>
            </header>
        </>
    )
}

export default NavPrincipal;