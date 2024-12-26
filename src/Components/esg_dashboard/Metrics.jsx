import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Metrics = () => {
  const navigate = useNavigate();
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/esgmetric');
        setMetrics(response.data);
      } catch (error) {
        console.error('Error fetching metrics:', error);
      }
    };
    
    fetchMetrics();
  }, []);

  const handleMetricsClick = () => {
    navigate('/AddEditESGMetric');
  };

  return (
    <div className="grid gap-6 mt-14">
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-4">ESG Metrics</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600 transition duration-300" onClick={handleMetricsClick}>
        Add New Metric
      </button>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Metrics"
          className="border border-gray-300 rounded-md p-2 w-full transition duration-300 hover:border-blue-500"
        />
      </div>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 bg-gray-200">Name</th>
            <th className="border border-gray-300 p-2 bg-gray-200">Category</th>
            <th className="border border-gray-300 p-2 bg-gray-200">Subcategory</th>
            <th className="border border-gray-300 p-2 bg-gray-200">Description</th>
            <th className="border border-gray-300 p-2 bg-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {metrics.map((metric) => (
            <tr key={metric._id} className="hover:bg-gray-100 transition duration-200">
              <td className="border border-gray-300 p-2">{metric.name}</td>
              <td className="border border-gray-300 p-2">{metric.category}</td>
              <td className="border border-gray-300 p-2">{metric.subcategory}</td>
              <td className="border border-gray-300 p-2">{metric.description}</td>
              <td className="border border-gray-300 p-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition duration-300">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-300">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Metrics;
