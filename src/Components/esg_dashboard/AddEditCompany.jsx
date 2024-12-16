import React, { useState } from 'react';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/solid';
import axios from 'axios';

const AddEditCompany = () => {
  const [formData, setFormData] = useState({
    name: '',
    industry: '',
    country: '',
    description: '',
  });

  const [isValidName, setIsValidName] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'name') {
      setIsValidName(value.trim() !== '');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name.trim()) {
      setIsValidName(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/company', formData);
      console.log('Company details stored successfully:', response.data);
    } catch (error) {
      console.error('There was an error saving the company details!', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg transition-transform duration-500 hover:scale-105">
      <h1 className="text-2xl font-bold text-black mb-6">Add/Edit Company</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-black text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <div className="flex items-center">
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 ${
    isValidName ? 'border-gray-300 focus:ring-blue-500' : 'border-red-500 focus:ring-red-500'
  }`}
            />
            <div className="ml-2">
              {isValidName ? (
                <CheckCircleIcon className="h-6 w-6 text-green-500 transition-transform duration-300 hover:scale-110" />
              ) : (
                <ExclamationCircleIcon className="h-6 w-6 text-red-500 transition-transform duration-300 hover:scale-110" />
              )}
            </div>
          </div>
          {!isValidName && <p className="text-red-500 text-sm mt-1">Name is required</p>}
        </div>

        <div>
          <label className="block text-black text-sm font-medium mb-2" htmlFor="industry">
            Industry
          </label>
          <input
            id="industry"
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
        </div>

        <div>
          <label className="block text-black text-sm font-medium mb-2" htmlFor="country">
            Country
          </label>
          <input
            id="country"
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
        </div>

        <div>
          <label className="block text-black text-sm font-medium mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          ></textarea>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 hover:scale-105"
          >
            Save
          </button>
          <button
            type="button"
            className="px-6 py-2 border border-gray-300 text-black rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-transform duration-300 hover:scale-105"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEditCompany;
