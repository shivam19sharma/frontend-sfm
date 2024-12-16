import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const ESGData = () => {
  const [company, setCompany] = useState('');
  const [year, setYear] = useState('');
  const [metrics, setMetrics] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState('');

  // useEffect(() => {
  //   const fetchCompanies = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5000/api/company');
  //       setCompanies(response.data);
  //     } catch (error) {
  //       console.error('Error fetching companies:', error);
  //     }
  //   };

  //   fetchCompanies();

  //   const initialMetrics = [
  //     { metric: 'Energy Consumption', value: '' },
  //     { metric: 'Renewable Energy', value: '' },
  //     { metric: 'GHG Emissions', value: '' },
  //     { metric: 'Employment Rates', value: '' },
  //     { metric: 'Diversity', value: '' },
  //     { metric: 'Board Composition', value: '' },
  //     { metric: 'Ethical Practices', value: '' },
  //   ];
  //   setMetrics(initialMetrics);
  // }, []);

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

    console.log('Sending ESG Data:', companyESGData);

    // try {
    //   const response = await axios.post('http://localhost:5000/api/companyesg', companyESGData);
    //   console.log('ESG data saved successfully:', response.data);
    // } catch (error) {
    //   console.error('Error saving ESG data:', error);
    //   setError('Error saving ESG data');
    // }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6">ESG Data Entry</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Company</label>
          <select
            className="w-full border border-gray-300 rounded-md p-2"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          >
            <option value="">Select a company</option>
            {companies.map((c) => (
              <option key={c._id} value={c._id}>{c.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-2">
        <div className="font-medium">Metric</div>
        <div className="font-medium">Value</div>
      </div>
      {metrics.map((metric, index) => (
        <div key={index} className="grid grid-cols-2 gap-4 mb-4">
          <div>{metric.metric}</div>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2"
            value={metric.value}
            onChange={(e) => handleMetricChange(index, e)}
          />
        </div>
      ))}
      <div className="flex justify-end mt-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={handleSave}
        >
          Save ESG Data
        </button>
      </div>
    </div>
  );
};

export default ESGData;
