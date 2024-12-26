import React, { useState } from 'react';
import jsPDF from 'jspdf';

const ProjectBoundary = () => {
  const [formData, setFormData] = useState({
    carbonSources: [],
    carbonSinks: [],
    carbonReservoirs: [],
    forests: {
      forestType: '',
      protected: '',
      treeSpecies: '',
      vegetationDensity: '',
    },
  });

  const [activeTab, setActiveTab] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value),
      }));
    } else if (name.startsWith('forests_')) {
      const field = name.replace('forests_', '');
      setFormData((prev) => ({
        ...prev,
        forests: { ...prev.forests, [field]: value },
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/project-boundary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  };

  const renderTabContent = () => {
    const tabsContent = [
      {
        title: 'Carbon Sources',
        options: [
          { label: 'Vehicles', value: 'vehicles' },
          { label: 'Agriculture', value: 'agriculture' },
          { label: 'Industry', value: 'industry' },
        ],
        name: 'carbonSources',
      },
      {
        title: 'Carbon Sinks',
        options: [
          { label: 'Trees', value: 'trees' },
          { label: 'Soil', value: 'soil' },
          { label: 'Wetlands', value: 'wetlands' },
        ],
        name: 'carbonSinks',
      },
      {
        title: 'Carbon Reservoirs',
        options: [
          { label: 'Permafrost', value: 'permafrost' },
          { label: 'Peatlands', value: 'peatlands' },
        ],
        name: 'carbonReservoirs',
      },
    ];

    if (activeTab < 3) {
      const { title, options, name } = tabsContent[activeTab];
      return (
        <div className="grid gap-6 mt-14">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <div className="options-container">
              {options.map(({ label, value }) => (
                <div key={value} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label className="text-gray-700">{label}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="grid gap-6 mt-14">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Forests</h2>
          <div className="form-fields">
            {[
              { label: 'Forest type:', name: 'forests_forestType', type: 'select', options: ['Tropical', 'Rainforest', 'Temperate', 'Mangrove'] },
              { label: 'Protected:', name: 'forests_protected', type: 'select', options: ['National', 'State', 'None'] },
              { label: 'Tree species composition:', name: 'forests_treeSpecies', type: 'text' },
              { label: 'Vegetation density:', name: 'forests_vegetationDensity', type: 'text' },
            ].map(({ label, name, type, options }) => (
              <div className="mb-4" key={name}>
                <label htmlFor={name} className="block text-gray-700">{label}</label>
                {type === 'select' ? (
                  <select name={name} id={name} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2 transition duration-300 hover:border-blue-500">
                    <option value="">Select</option>
                    {options.map((opt) => (
                      <option key={opt} value={opt.toLowerCase()}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input type="text" name={name} id={name} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2 transition duration-300 hover:border-blue-500" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const handlePreview = () => {
    setIsPreviewOpen(true);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text('Project Boundary Form Preview', 10, 10);

    let y = 20;
    Object.entries(formData).forEach(([key, value]) => {
      doc.text(`${key}:`, 10, y);
      const content = Array.isArray(value)
        ? value.join(', ') || 'None selected'
        : typeof value === 'object'
        ? JSON.stringify(value, null, 2)
        : value || 'N/A';
      doc.text(content, 20, y + 10);
      y += 20;
    });

    doc.save('form-preview.pdf');
  };

  return (
    <div className="grid gap-6 mt-14">
      <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Define Project Boundary</h1>
        <div className="tabs mb-4">
          {['Sources', 'Sinks', 'Reservoirs', 'Forests'].map((tab, index) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-200'} px-4 py-2 rounded-md mr-2 transition duration-300`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="tab-content">{renderTabContent()}</div>
          <div className="form-navigation mt-4">
            {activeTab > 0 && (
              <button type="button" onClick={() => setActiveTab((prev) => prev - 1)} className="nav-button prev bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md transition duration-200">
                Previous
              </button>
            )}
            {activeTab < 3 && (
              <button type="button" onClick={() => setActiveTab((prev) => prev + 1)} className="nav-button next bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md transition duration-200">
                Next
              </button>
            )}
            {activeTab === 3 && (
              <>
                <button type="button" className="preview-button bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200" onClick={handlePreview}>
                  Preview
                </button>
                <button type="submit" className="submit-button bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200">Submit</button>
              </>
            )}
          </div>
        </form>

        {isPreviewOpen && (
          <div className="preview-modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="preview-content bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Form Preview</h2>
              {Object.entries(formData).map(([key, value]) => (
                <div className="preview-field mb-2" key={key}>
                  <strong>{key.replace(/([A-Z])/g, ' $1')}:</strong>{' '}
                  {Array.isArray(value)
                    ? value.join(', ') || 'None selected'
                    : typeof value === 'object'
                    ? JSON.stringify(value, null, 2)
                    : value || 'N/A'}
                </div>
              ))}
              <div className="preview-actions mt-4">
                <button onClick={downloadPDF} className="download-pdf-btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
                  Download PDF
                </button>
                <button onClick={() => setIsPreviewOpen(false)} className="close-preview-btn bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectBoundary;