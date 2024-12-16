import React, { useState } from 'react';
import jsPDF from 'jspdf';

function ProjectBoundary() {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted successfully!');
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
                <>
                    <h2 className="text-xl font-bold mb-4 text-black">{title}</h2>
                    <div className="space-y-2">
                        {options.map(({ label, value }) => (
                            <div key={value} className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name={name}
                                    value={value}
                                    onChange={handleChange}
                                    className="rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
                                />
                                <label className="text-black">{label}</label>
                            </div>
                        ))}
                    </div>
                </>
            );
        }

        return (
            <div>
                <h2 className="text-xl font-bold mb-4 text-black">Forests</h2>
                <div className="space-y-4">
                    {[
                        { label: 'Forest type:', name: 'forests_forestType', type: 'select', options: ['Tropical', 'Rainforest', 'Temperate', 'Mangrove'] },
                        { label: 'Protected:', name: 'forests_protected', type: 'select', options: ['National', 'State', 'None'] },
                        { label: 'Tree species composition:', name: 'forests_treeSpecies', type: 'text' },
                        { label: 'Vegetation density:', name: 'forests_vegetationDensity', type: 'text' },
                    ].map(({ label, name, type, options }) => (
                        <div className="space-y-2" key={name}>
                            <label className="font-medium text-black">{label}</label>
                            {type === 'select' ? (
                                <select
                                    name={name}
                                    onChange={handleChange}
                                    className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select</option>
                                    {options.map((opt) => (
                                        <option key={opt} value={opt.toLowerCase()}>
                                            {opt}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <input
                                    type="text"
                                    name={name}
                                    onChange={handleChange}
                                    className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            )}
                        </div>
                    ))}
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
        <div className="bg-gray-100 p-8 rounded shadow-md max-w-4xl mx-auto mt-10 animate-fadeIn">
            <h1 className="text-2xl font-bold text-center mb-6 text-black">Define Project Boundary</h1>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {['Sources', 'Sinks', 'Reservoirs', 'Forests'].map((tab, index) => (
                    <button
                        key={tab}
                        className={`p-3 rounded transform transition-transform duration-300 ${
                            activeTab === index
                                ? 'bg-blue-600 text-white scale-105 shadow-lg'
                                : 'bg-gray-200 text-black hover:bg-blue-500 hover:text-white hover:scale-105'
                        }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <div>{renderTabContent()}</div>
                <div className="flex justify-between mt-6">
                    {activeTab > 0 && (
                        <button
                            type="button"
                            onClick={() => setActiveTab((prev) => prev - 1)}
                            className="px-4 py-2 bg-blue-600 text-white rounded transform transition-transform hover:scale-105 hover:bg-blue-700"
                        >
                            Previous
                        </button>
                    )}
                    {activeTab < 3 && (
                        <button
                            type="button"
                            onClick={() => setActiveTab((prev) => prev + 1)}
                            className="px-4 py-2 bg-blue-600 text-white rounded transform transition-transform hover:scale-105 hover:bg-blue-700"
                        >
                            Next
                        </button>
                    )}
                    {activeTab === 3 && (
                        <div className="flex space-x-4">
                            <button
                                type="button"
                                className="px-4 py-2 bg-yellow-500 text-white rounded transform transition-transform hover:scale-105 hover:bg-yellow-600"
                                onClick={handlePreview}
                            >
                                Preview
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-green-500 text-white rounded transform transition-transform hover:scale-105 hover:bg-green-600"
                            >
                                Submit
                            </button>
                        </div>
                    )}
                </div>
            </form>

            {isPreviewOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
                        <h2 className="text-xl font-bold mb-4">Form Preview</h2>
                        <div className="space-y-2">
                            {Object.entries(formData).map(([key, value]) => (
                                <div key={key} className="border-b pb-2">
                                    <strong className="block text-gray-800 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</strong>
                                    <span className="block text-gray-600">{
                                        Array.isArray(value)
                                            ? value.join(', ') || 'None selected'
                                            : typeof value === 'object'
                                            ? JSON.stringify(value, null, 2)
                                            : value || 'N/A'
                                    }</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-end space-x-2 mt-4">
                            <button
                                onClick={downloadPDF}
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Download PDF
                            </button>
                            <button
                                onClick={() => setIsPreviewOpen(false)}
                                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectBoundary;
