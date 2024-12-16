import React, { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fade-in effect on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Page Content */}
      <section className="mt-20 py-12 px-6 container mx-auto text-center bg-white shadow-lg rounded-lg border border-gray-300 transform transition-transform duration-500 hover:scale-105">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-green-800 animate__animated animate__fadeIn animate__delay-1s">
          About Us
        </h1>
        <p className="text-lg lg:text-xl mb-6 text-gray-700 animate__animated animate__fadeIn animate__delay-2s">
          At Sustainability Footprint Management, we are committed to driving positive change through innovative solutions and empowering individuals and organizations to make impactful decisions for a greener future.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="w-full md:w-1/2 lg:w-1/3 bg-green-50 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide comprehensive, user-friendly tools that enable better understanding and management of environmental impact for individuals and businesses.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 bg-green-100 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              A world where sustainable practices are seamlessly integrated into everyday life, fostering eco-friendly habits and reducing carbon footprints for a better tomorrow.
            </p>
          </div>
        </div>
        <div className={`mt-8 ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
          <h2 className="text-3xl font-bold text-green-800 mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-700">
            We blend technology, research, and community support to make sustainability accessible for everyone. Our platform is designed with an intuitive interface, actionable insights, and practical tools to help you take real steps toward sustainability.
          </p>
        </div>
        <div className="mt-8 py-4 px-6 bg-green-800 text-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Join Us in Making a Difference</h3>
          <p className="text-lg">
            Be part of the movement toward a sustainable future. Together, we can achieve impactful change and build a better world.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
