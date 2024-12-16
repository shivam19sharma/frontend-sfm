import React, { useState, useEffect } from 'react';

const CompanyInformation = ({ details }) => (
  <div className="mb-8 animate-fade-in">
    <h2 className="text-xl font-semibold mb-4 text-black">Company Information</h2>
    <div className="mb-4">
      <label className="block text-sm font-medium text-black">Name</label>
      <input
        type="text"
        value={details.name}
        disabled
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-black">Industry</label>
      <input
        type="text"
        value={details.industry}
        disabled
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-black">Country</label>
      <input
        type="text"
        value={details.country}
        disabled
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-black">Description</label>
      <textarea
        value={details.description}
        disabled
        rows={4}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
    </div>
  </div>
);

const ESGData = ({ details }) => (
  <div className="mb-8 animate-slide-in">
    <h2 className="text-xl font-semibold mb-4 text-black">ESG Data</h2>
    {['Environmental', 'Social', 'Governance'].map((category) => (
      <div className="mb-4 border rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" key={category}>
        <button
          type="button"
          className="w-full text-left px-4 py-2 bg-gray-100 border-b rounded-t-lg"
        >
          {category}
        </button>
        <div className="p-4">
          {Object.entries(details?.[category.toLowerCase()] || {}).map(
            ([key, value]) => (
              <div className="mb-4" key={key}>
                <label className="block text-sm font-medium text-black">
                  {key.replace(/([A-Z])/g, ' $1')}
                </label>
                <input
                  type="text"
                  value={value || ''}
                  disabled
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            )
          )}
        </div>
      </div>
    ))}
  </div>
);

const CompanyDetails = () => {
  const [companyDetails, setCompanyDetails] = useState(null);

  useEffect(() => {
    // Simulated fetch function
    const fetchCompanyDetails = async () => {
      const data = {
        name: "Demo Company",
        industry: "Technology",
        country: "USA",
        description: "A leading company in innovative tech solutions.",
        esgData: {
          environmental: { CarbonEmissions: "Low", RenewableEnergyUsage: "High" },
          social: { Diversity: "Excellent", EmployeeSatisfaction: "Very High" },
          governance: { Transparency: "Strong", BoardDiversity: "Good" }
        }
      };
      setCompanyDetails(data);
    };

    fetchCompanyDetails();
  }, []);

  if (!companyDetails) {
    return <p className="text-black">Loading...</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-black animate-fade-in">Company Details</h1>
      <CompanyInformation details={companyDetails} />
      <ESGData details={companyDetails.esgData} />
      <button
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transform hover:scale-105 transition-transform"
      >
        Save Changes
      </button>
    </div>
  );
};

export default CompanyDetails;
