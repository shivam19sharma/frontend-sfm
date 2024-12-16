import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
 import Navbar from './Components/Home/Navbar';
import Contact from './Components/Home/Contact';
import Service from './Components/Home/Service';
 import About from './Components/Home/About';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar persists across all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
    </Router>
  );
};

export default App;
