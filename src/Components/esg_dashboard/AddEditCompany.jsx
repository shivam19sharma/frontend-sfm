import React, { useState } from 'react';
import axios from 'axios';

const AddEditCompany = () => {
  const [formData, setFormData] = useState({
    name: '',
    industry: '',
    country: '',
    description: ''
  });

  const [isValidName, setIsValidName] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
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
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Add/Edit Company</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 block w-full border ${!isValidName ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 transition duration-300 hover:border-blue-500`}
          />
          {!isValidName && <p className="text-red-500 text-sm">Name is required</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Industry</label>
          <input
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 transition duration-300 hover:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 transition duration-300 hover:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 transition duration-300 hover:border-blue-500"
            rows="4"
          />
        </div>
        <div className="flex space-x-2">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Save</button>
          <button type="button" className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-200 transition duration-300">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddEditCompany;
