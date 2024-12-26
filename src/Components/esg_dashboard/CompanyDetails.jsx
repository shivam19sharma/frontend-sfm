import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CompanyDetails = () => {
  const { companyID } = useParams();
  const [companyDetails, setCompanyDetails] = useState(null);

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/company/${companyID}`);
        setCompanyDetails(response.data);
      } catch (error) {
        console.error('Error fetching company details', error);
      }
    };
    fetchCompanyDetails();
  }, [companyID]);

  if (!companyDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid gap-6 mt-14">
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Company Detail</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input type="text" value={companyDetails.name} disabled className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Industry</label>
          <input type="text" value={companyDetails.industry} disabled className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Country</label>
          <input type="text" value={companyDetails.country} disabled className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea value={companyDetails.description} disabled className="mt-1 block w-full border border-gray-300 rounded-md p-2" rows="4" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Save Changes</button>
      </div>
    </div>
    </div>
  );
};

export default CompanyDetails;
