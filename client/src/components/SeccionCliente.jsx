import marketplace from '../../images/marketplace.png';
import recompensas from '../../images/logro.png';
import { Link } from 'react-router-dom';

const SeccionCliente = () => {

    const estilotitulo = {
        color: '#2D2D2D',
        textalign: 'center',
        fontfamily: 'Rakkas',
        fontWeight: 'bold',
    };


    return (
        <>
            <div style={{ display: 'flex', height: 'calc(80vh - 64px)' }}>
                {/* Left side with images and titles */}
                <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={marketplace} alt="Image 1" style={{ width: '30vh', height: 'auto', marginRight: '10%', marginLeft: '20%' }} />
                        <Link to="/producto"> 
                        <button className="text-3xl" style={estilotitulo}>MARKETPLACE</button>
                        </Link>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={recompensas} alt="Image 2" style={{ width: '30vh', height: 'auto', marginRight: '10%' , marginLeft: '20%'}} />
                        <Link to="/contrato"> 
                        <button className="text-3xl" style={estilotitulo}>RECOMPENSAS</button>
                        </Link>
                    </div>
                </div>

                {/* Right side with an additional image */}
                <div style={{ flex: '1', padding: '20px' }}>
                <img src="https://lamynaals.com/assets/services/crypt.gif" alt="Additional Image" className="rounded-lg ml-6" style={{ width: '70%', height: 'auto' }} />
                </div>
            </div>
        </>
    )
}

export default SeccionCliente;