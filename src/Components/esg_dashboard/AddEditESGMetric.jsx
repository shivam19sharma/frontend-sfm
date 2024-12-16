import React, { useState } from 'react';
// import axios from 'axios';

const AddEditESGMetric = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    subcategory: '',
    description: '',
  });

  const [isValidName, setIsValidName] = useState(true);
  const [isValidCategory, setIsValidCategory] = useState(true);
  const [isValidSubcategory, setIsValidSubcategory] = useState(true);
  const [isValidDescription, setIsValidDescription] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'name') {
      setIsValidName(value.trim() !== '');
    }
    if (name === 'category') {
      setIsValidCategory(value.trim() !== '');
    }
    if (name === 'subcategory') {
      setIsValidSubcategory(value.trim() !== '');
    }
    if (name === 'description') {
      setIsValidDescription(value.trim() !== '');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isNameValid = formData.name.trim() !== '';
    const isCategoryValid = formData.category.trim() !== '';
    const isSubcategoryValid = formData.subcategory.trim() !== '';
    const isDescriptionValid = formData.description.trim() !== '';

    setIsValidName(isNameValid);
    setIsValidCategory(isCategoryValid);
    setIsValidSubcategory(isSubcategoryValid);
    setIsValidDescription(isDescriptionValid);

    if (!isNameValid || !isCategoryValid || !isSubcategoryValid || !isDescriptionValid) {
      return;
    }

    // try {
    //   const response = await axios.post('http://localhost:5000/api/esgmetric', formData);
    //   console.log('ESG metric stored successfully:', response.data);
    // } catch (error) {
    //   console.error('There was an error saving the ESG metric details!', error);
    // }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-black mb-6 animate-fade-in">Add/Edit ESG Metric</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-black font-semibold mb-2">Metric Name</label>
          <div className="flex items-center">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`flex-grow px-4 py-2 border rounded-md focus:outline-none transition-transform duration-300 hover:scale-105 ${
                !isValidName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter metric name"
            />
            {isValidName ? (
              <span className="ml-2 text-green-500 transform hover:scale-110 transition-transform">✔</span>
            ) : (
              <span className="ml-2 text-red-500 transform hover:scale-110 transition-transform">✘</span>
            )}
          </div>
          {!isValidName && <p className="text-red-500 text-sm">Name is required</p>}
        </div>

        <div className="mb-4">
          <label className="block text-black font-semibold mb-2">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none transition-transform duration-300 hover:scale-105 ${
              !isValidCategory ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="Environmental">Environmental</option>
            <option value="Social">Social</option>
            <option value="Governance">Governance</option>
          </select>
          {!isValidCategory && <p className="text-red-500 text-sm">Category is required</p>}
        </div>

        <div className="mb-4">
          <label className="block text-black font-semibold mb-2">Subcategory</label>
          <input
            type="text"
            name="subcategory"
            value={formData.subcategory}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none transition-transform duration-300 hover:scale-105 ${
              !isValidSubcategory ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter subcategory"
          />
          {!isValidSubcategory && <p className="text-red-500 text-sm">Subcategory is required</p>}
        </div>

        <div className="mb-4">
          <label className="block text-black font-semibold mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none transition-transform duration-300 hover:scale-105 ${
              !isValidDescription ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter description"
          ></textarea>
          {!isValidDescription && <p className="text-red-500 text-sm">Description is required</p>}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transform hover:scale-105 transition-transform"
          >
            Save
          </button>
          <button
            type="button"
            className="ml-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transform hover:scale-105 transition-transform"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEditESGMetric;
