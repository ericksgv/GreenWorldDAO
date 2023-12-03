
const NavSecundaria = () => {

    const estilotitulo = {
        color: '#2D2D2D',
        textalign: 'center',
        fontfamily: 'Rakkas',
        fontWeight: 'bold',
    };

    const estilobotones = {
        color: '#053126',
        textalign: 'center',
        fontfamily: 'Rakkas',
        fontWeight: 'bold',
    };

    const estilobotones2 = {
        color: '#CBE9D2',
        textalign: 'center',
        fontfamily: 'Rakkas',
        fontWeight: 'bold',
    };


  return (
    <header className="bg-lightgreen text-white p-8 flex items-center justify-between">
      <div>
        <h1 className="text-5xl font-bold ml-48" style={estilotitulo}>Servicios</h1>
      </div>
      <div className="flex space-x-9">
        <button className="bg-lightgreen px-24 py-2 rounded border border-blackgreen" style={estilobotones}>0 gTk</button>
        <button className="bg-lightgreen text-white px-24 py-2 rounded border border-blackgreen" style={estilobotones}>0 cUSD</button>
        <button className="bg-blackgreen text-white px-24 py-2 rounded border border-blackgreen" style={estilobotones2}>Connect Metamask</button>
      </div>
    </header>
  );
};

export { NavSecundaria };
