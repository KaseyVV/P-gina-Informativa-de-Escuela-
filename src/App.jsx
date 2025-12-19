import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contacto from './pages/Contacto';

import './App.css';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Navbar />
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contactos" element={<Contacto />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;