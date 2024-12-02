import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="font-sans">
      
      {/* Navbar */}
      <nav className="bg-green-800 text-white py-4 fixed w-full top-0 z-10">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="flex space-x-6">
            <Link to="/" className="text-xl font-bold">SFM</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <Link to="/services" className="hover:text-gray-300">Services</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </div>
          <div className="flex space-x-6">
            <Link to="/login" className="hover:text-gray-300">Login</Link>
            <Link to="/signup">
              <button className="bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-600 transition duration-300">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/images/home_pg.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto h-full flex justify-center items-center text-center text-white relative z-10 px-6">
          <div>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">Welcome to Sustainability Footprint Management</h1>
            <p className="text-lg lg:text-xl mb-8 opacity-80">Empowering Sustainable Futures</p>
            <Link to="/get-started">
              <button className="bg-yellow-500 text-white py-3 px-8 rounded-full hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
