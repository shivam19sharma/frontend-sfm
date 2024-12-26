import React, { useState } from 'react';
import axios from 'axios';

const AddEditESGMetric = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    subcategory: '',
    description: ''
  });

  const [isValidName, setIsValidName] = useState(true);
  const [isValidCategory, setIsValidCategory] = useState(true);
  const [isValidSubcategory, setIsValidSubcategory] = useState(true);
  const [isValidDescription, setIsValidDescription] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
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

    try {
      const response = await axios.post('http://localhost:5000/api/esgmetric', formData);
      console.log('ESG metric stored successfully:', response.data);
    } catch (error) {
      console.error('There was an error saving the ESG metric details!', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Add/Edit ESG Metric</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Metric Name</label>
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
          <label className="block text-sm font-medium">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={`mt-1 block w-full border ${!isValidCategory ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 transition duration-300 hover:border-blue-500`}
          />
          {!isValidCategory && <p className="text-red-500 text-sm">Category is required</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Subcategory</label>
          <input
            type="text"
            name="subcategory"
            value={formData.subcategory}
            onChange={handleChange}
            className={`mt-1 block w-full border ${!isValidSubcategory ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 transition duration-300 hover:border-blue-500`}
          />
          {!isValidSubcategory && <p className="text-red-500 text-sm">Subcategory is required</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={`mt-1 block w-full border ${!isValidDescription ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 transition duration-300 hover:border-blue-500`}
            rows="4"
          />
          {!isValidDescription && <p className="text-red-500 text-sm">Description is required</p>}
        </div>
        <div className="flex space-x-2">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Save</button>
          <button type="button" className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-200 transition duration-300">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddEditESGMetric;
