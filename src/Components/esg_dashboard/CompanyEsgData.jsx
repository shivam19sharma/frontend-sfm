import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ESGData = () => {
  const [company, setCompany] = useState('');
  const [year, setYear] = useState('');
  const [metrics, setMetrics] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/company');
        setCompanies(response.data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchCompanies();
    
    const initialMetrics = [
      { metric: 'Energy Consumption', value: '' },
      { metric: 'Renewable Energy', value: '' },
      { metric: 'GHG Emissions', value: '' },
      { metric: 'Employment Rates', value: '' },
      { metric: 'Diversity', value: '' },
      { metric: 'Board Composition', value: '' },
      { metric: 'Ethical Practices', value: '' },
    ];
    setMetrics(initialMetrics);
  }, []);

  const handleMetricChange = (index, event) => {
    const newMetrics = [...metrics];
    newMetrics[index].value = event.target.value;
    setMetrics(newMetrics);
  };

  const handleSave = async () => {
    const companyESGData = metrics.map(metric => ({
      companyID: company,
      year,
      metricID: metric.metric,
      value: metric.value,
    }));

    try {
      const response = await axios.post('http://localhost:5000/api/companyesg', companyESGData);
      console.log('ESG data saved successfully:', response.data);
    } catch (error) {
      console.error('Error saving ESG data:', error);
      setError('Error saving ESG data');
    }
  };

  return (
    <div className="grid gap-6 mt-14">
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-4">ESG Data Entry</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label className="block text-sm font-medium">Select Company</label>
        <select value={company} onChange={(e) => setCompany(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md p-2 transition duration-300 hover:border-blue-500">
          {companies.map(c => (
            <option key={c._id} value={c._id}>{c.name}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Year</label>
        <input type="text" value={year} onChange={(e) => setYear(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md p-2 transition duration-300 hover:border-blue-500" />
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Metrics</h2>
        {metrics.map((metric, index) => (
          <div key={index} className="flex justify-between mb-2">
            <span className="text-gray-700">{metric.metric}</span>
            <input
              type="text"
              value={metric.value}
              onChange={(e) => handleMetricChange(index, e)}
              className="border border-gray-300 rounded-md p-1 transition duration-300 hover:border-blue-500 w-1/2"
            />
          </div>
        ))}
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300" onClick={handleSave}>Save ESG Data</button>
    </div>
    </div>
  );
};

export default ESGData;
