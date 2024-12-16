import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

const Metrics = () => {
  const navigate = useNavigate();
  const [metrics, setMetrics] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [subcategoryFilter, setSubcategoryFilter] = useState('');

  // Fetch metrics data from the API
  // useEffect(() => {
  //   const fetchMetrics = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5000/api/esgmetric');
  //       setMetrics(response.data);
  //     } catch (error) {
  //       console.error('Error fetching metrics:', error);
  //     }
  //   };

  //   fetchMetrics();
  // }, []);

  // Handle navigation to add/edit metric page
  const handleMetricsClick = () => {
    navigate('/AddEditESGMetric');
  };

  // Handle category filter change
  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  // Handle subcategory filter change
  const handleSubcategoryChange = (event) => {
    setSubcategoryFilter(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-black mb-4">ESG Metrics</h1>

      <div className="mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transform transition-transform duration-300 hover:scale-105"
          onClick={handleMetricsClick}
        >
          Add New Metric
        </button>
      </div>

      <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Search Metrics"
          className="col-span-2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-transform duration-300 hover:scale-105"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transform transition-transform duration-300 hover:scale-105">Search</button>
      </div>

      <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-black">Category</label>
          <select
            value={categoryFilter}
            onChange={handleCategoryChange}
            className="border border-gray-300 rounded w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-transform duration-300 hover:scale-105"
          >
            <option value="">All</option>
            <option value="Environmental">Environmental</option>
            <option value="Social">Social</option>
            <option value="Governance">Governance</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-black">Subcategory</label>
          <select
            value={subcategoryFilter}
            onChange={handleSubcategoryChange}
            className="border border-gray-300 rounded w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-transform duration-300 hover:scale-105"
          >
            <option value="">All</option>
            <option value="Energy Management">Energy Management</option>
            <option value="Labor Practices">Labor Practices</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2 transform transition-transform duration-300 hover:scale-105">Apply Filters</button>
        <button className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300 transform transition-transform duration-300 hover:scale-105">Reset Filters</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left text-black">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-black">Category</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-black">Subcategory</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-black">Description</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-black">Actions</th>
            </tr>
          </thead>
          <tbody>
            {metrics.map((metric) => (
              <tr key={metric._id} className="hover:bg-gray-50 transform transition-transform duration-300 hover:scale-105">
                <td className="border border-gray-300 px-4 py-2 text-black">{metric.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-black">{metric.category}</td>
                <td className="border border-gray-300 px-4 py-2 text-black">{metric.subcategory}</td>
                <td className="border border-gray-300 px-4 py-2 text-black">{metric.description}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600 transform transition-transform duration-300 hover:scale-110">Edit</button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transform transition-transform duration-300 hover:scale-110">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transform transition-transform duration-300 hover:scale-105">Bulk Upload CSV</button>
      </div>
    </div>
  );
};

export default Metrics;
