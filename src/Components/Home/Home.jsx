import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="font-sans">
      
     

     
      <section className="relative bg-cover bg-center h-screen">
  {/* Hero Background Overlay */}
  {/* <div className="absolute inset-0 bg-black opacity-50 z-20"></div> */}
  <div className="container mx-auto h-full flex justify-center items-center text-center text-black relative z-10 px-6">
    <div>
      <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">Welcome to Sustainability Footprint Management</h1>
      <p className="text-lg lg:text-xl mb-8 opacity-80">Empowering Sustainable Futures</p>
      <Link to="/get-started">
        <button className="bg-yellow-500 text-white py-3 px-8 rounded-full hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl">
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