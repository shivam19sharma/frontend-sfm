import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('File upload failed!');
    }
  };

  return (
    <div className="grid gap-6 mt-14">
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Download Excel Template</h3>
        <p>Please download and fill in the template below with your data before uploading it.</p>
        <a href="/template.xlsx" download="template.xlsx">
          <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Download Template</button>
        </a>
      </div>

      <form onSubmit={handleFileUpload} className="space-y-4">
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileChange}
          className="border border-gray-300 rounded-md p-2 w-full transition duration-300 hover:border-blue-500"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Upload Excel</button>
      </form>
    </div>
    </div>
  );
};

export default FileUpload;
