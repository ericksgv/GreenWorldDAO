import refi from '../../images/refi.png';
import celo from '../../images/celo.png';
import github from '../../images/github.png';
import logo from '../../images/GreenLogoSinfondo.png';


const Footer = () => {

    const estilosparrafos = {
        color: '#053126',
        textAlign: 'center',
        fontFamily: 'Rakkas',
        fontWeight: 'bold',
    };


    return (
        <footer className="bg-lightgreen p-8 flex items-center justify-between">
            {/* Left half with "Green World" */}
            <div className="flex items-center ">
            <img
            src={logo}
            alt="Nueva Imagen"
            className="mb-4 ml-14"
            style={{ width: '10vh', height: 'auto' }}
        />
                <p className="text-5xl" style={estilosparrafos}>Green World</p>
            </div>

            {/* Center with "Powered by" and two images below */}
            <div className="flex flex-col items-center ">
                <p className="text-lg mb-2" style={estilosparrafos}>Powered by</p>
                <div className="flex items-center justify-center mb-4">
                    <img src={refi} alt="Image 1" className="" style={{ width: '100px', height: '100px' }} />
                    <img src={celo} alt="Image 2" style={{ width: '100px', height: '100px' }} />
                </div>
            </div>

            {/* Right half with another image */}
            <div className="flex items-center mr-20 ">
                <img src={github} alt="Image 3" style={{ width: '10vh', height: 'auto'}} />
            </div>
        </footer>
    );
};

export default Footer;
