import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import ESGChart from './ESGChart';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('bg-gray-100');
    return () => {
      document.body.classList.remove('bg-gray-100');
    };
  }, []);

  const handleAddCompanyClick = () => {
    navigate('/AddEditCompany');
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <Sidebar />
      <div className="flex-1 p-4 lg:p-6 overflow-y-auto">
        <div className="bg-white shadow-xl rounded-lg p-6 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center transition-transform duration-500 hover:scale-105">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-3xl font-bold text-black">Dashboard</h1>
            <p className="text-black">Good Morning user!!!</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white shadow-xl rounded-lg p-6 transition-transform duration-500 hover:scale-105">
            <h3 className="text-lg font-semibold text-black mb-2">Total Companies:</h3>
            <p className="text-2xl font-bold text-black">1000</p>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-6 transition-transform duration-500 hover:scale-105">
            <h3 className="text-lg font-semibold text-black mb-2">Recent ESG Score</h3>
            <ESGChart />
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-6 flex flex-wrap items-center gap-4 transition-transform duration-500 hover:scale-105">
          <label className="font-semibold text-black">Quick Link:</label>
          <button 
            className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:translate-y-1"
            onClick={handleAddCompanyClick}
          >
            Add New Company
          </button>
          <button className="px-4 py-2 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:translate-y-1">
            View Reports
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
