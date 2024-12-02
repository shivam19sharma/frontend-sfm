import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'; // Adjust the path if needed
import Navbar from './Components/Navbar';
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        {/* Example Navbar */}
        {<Navbar /> }
        
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
