import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/main.css';
import Navbar from './components/navbar';

import Home from './components/Home';
import Gorodki from './components/Gorodki/Gorodki';
import Kyn from './components/Kyn/Kyn';
import Map from './components/map/map';

function App() {
  return (
    <Router>
    <div>
      <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upper-chusovskie-gorodki" element={<Gorodki />} />
          <Route path="/kyn" element={<Kyn />} />
          <Route path="/map" element={<Map />} />
        </Routes>

    </div>
    </Router>
  );
}

export default App;



