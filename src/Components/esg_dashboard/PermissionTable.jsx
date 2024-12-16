import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const PermissionTable = () => {
  const [permissions, setPermissions] = useState({
    'Edit/Add New Company': { view: false, add: false, edit: false, delete: false },
    'View Company': { view: false, add: false, edit: false, delete: false },
    'Search': { view: false, add: false, edit: false, delete: false },
    'Metric(Add/Edit)': { view: false, add: false, edit: false, delete: false },
    'Company ESG Data(ESG Data Entry)': { view: false, add: false, edit: false, delete: false },
  });

  const [roles, setRoles] = useState([]); // To store roles fetched from the database
  const [selectedRole, setSelectedRole] = useState(''); // Default role

  // useEffect(() => {
  //   // Fetch roles from the backend
  //   axios.get('http://localhost:5000/api/roles')
  //     .then(response => {
  //       setRoles(response.data);
  //       setSelectedRole(response.data[0]?.name || ''); // Set default selected role
  //     })
  //     .catch(error => {
  //       console.error('Error fetching roles:', error);
  //     });

    // Fetch permissions for the selected role
  //   if (selectedRole) {
  //     axios.get(`http://localhost:5000/api/permissions/${selectedRole}`)
  //       .then(response => {
  //         setPermissions(response.data.permissions || permissions);
  //       })
  //       .catch(error => {
  //         console.error('Error fetching permissions:', error);
  //       });
  //   }
  // }, [selectedRole]);

  const handleCheckboxChange = (feature, field) => {
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [feature]: {
        ...prevPermissions[feature],
        [field]: !prevPermissions[feature][field],
      },
    }));
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  // const handleSavePermissions = () => {
  //   axios.post(`http://localhost:5000/api/permissions/${selectedRole}`, { permissions })
  //     .then(response => {
  //       console.log('Permissions saved:', response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error saving permissions:', error);
  //     });
  // };

  return (
    <div className="bg-white shadow-md rounded-md p-6 max-w-4xl mx-auto animate-fade-in">
      <h2 className="text-2xl font-bold text-black mb-4">Assign Permission ({selectedRole})</h2>

      <div className="mb-4">
        <label htmlFor="role-select" className="block text-sm font-medium text-black">Select Role</label>
        <select
          id="role-select"
          className="w-full mt-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transform transition-transform duration-300 hover:scale-105"
          value={selectedRole}
          onChange={handleRoleChange}
        >
          <option value="" disabled>Select a Role</option>
          {roles.map((role) => (
            <option key={role._id} value={role._id}>
              {role.name}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left text-black">Feature</th>
              <th className="border border-gray-300 px-4 py-2 text-center text-black">View</th>
              <th className="border border-gray-300 px-4 py-2 text-center text-black">Add</th>
              <th className="border border-gray-300 px-4 py-2 text-center text-black">Edit</th>
              <th className="border border-gray-300 px-4 py-2 text-center text-black">Delete</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(permissions).map((feature) => (
              <tr key={feature} className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transform transition-transform duration-300">
                <td className="border border-gray-300 px-4 py-2 text-black">{feature}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={permissions[feature].view}
                    onChange={() => handleCheckboxChange(feature, 'view')}
                    className="cursor-pointer"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={permissions[feature].add}
                    onChange={() => handleCheckboxChange(feature, 'add')}
                    className="cursor-pointer"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={permissions[feature].edit}
                    onChange={() => handleCheckboxChange(feature, 'edit')}
                    className="cursor-pointer"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={permissions[feature].delete}
                    onChange={() => handleCheckboxChange(feature, 'delete')}
                    className="cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-right">
        <button
          // onClick={handleSavePermissions}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transform transition-transform duration-300 hover:scale-105"
        >
          Save Permissions
        </button>
      </div>
    </div>
  );
};

export default PermissionTable;
