import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Card from './Card';
import ESGChart from './ESGChart';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('dashboard');
    return () => {
      document.body.classList.remove('dashboard');
    };
  }, []);

  const handleAddCompanyClick = () => {
    navigate('/AddEditCompany');
  };

  return (
    <div className="flex-grow p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-green-800">Dashboard</h1>
      <div className="flex justify-between mb-4">
        <div>
          <h2 className="text-2xl">Good Morning user!!!</h2>
        </div>
        <div>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300" onClick={handleAddCompanyClick}>
            Add New Company
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300" title="Total Companies:" value="1000" />
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300" title="Recent ESG Score">
          <ESGChart />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;