import { LandingPage, NavPrincipal, SeccionCliente } from './components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { NavSecundaria } from './components/NavSecundaria.jsx'
import { NavTercearia } from './components/NavTerceario.jsx'
import { SeccionCliente2 } from './components/SeccionCliente2.jsx'
import { SeccionCliente3 } from './components/SeccionCliente3.jsx'
import { NavCuarta } from './components/NavCuarta.jsx'
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/cliente" element={
            <div className="min-h-screen bg-lightgreen">
              <NavSecundaria />
              <SeccionCliente />
            </div>
          } />
          <Route path="/" element={
            <div className="min-h-screen bg-white">
              <NavPrincipal />
              <LandingPage />
              <Footer />
            </div>} />
          <Route path="/producto" element={
            <div className="min-h-screen bg-lightgreen">
              <NavTercearia />
              <SeccionCliente2 />
            </div>
          } />
          <Route path="/contrato" element={
            <div className="min-h-screen bg-lightgreen">
              <NavCuarta />
              <SeccionCliente3 />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
};


export default App
