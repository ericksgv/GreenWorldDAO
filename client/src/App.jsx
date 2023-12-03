import { LandingPage, NavPrincipal, SeccionCliente } from './components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/cliente" element={
            <div className="min-h-screen bg-lightgreen">
          <SeccionCliente />
          </div>
          } />
          <Route path="/" element={
            <div className="min-h-screen bg-white">
              <NavPrincipal />
              <LandingPage />
            </div>} />
        </Routes>
      </div>
    </Router>
  );
};


export default App
