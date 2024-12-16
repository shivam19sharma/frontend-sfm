import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const Roles = () => {
  const [roleName, setRoleName] = useState('');
  const [search, setSearch] = useState('');
  const [roles, setRoles] = useState([]);
  const [editRole, setEditRole] = useState(null);
  const [editRoleName, setEditRoleName] = useState('');
  const [editRoleType, setEditRoleType] = useState('');
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const handleRoleNameChange = (event) => {
    setRoleName(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleEditRole = (role) => {
    setEditRole(role);
    setEditRoleName(role.name);
    setEditRoleType(role.type);
    setOpenEditDialog(true);
  };

  const filteredRoles = roles.filter((role) =>
    role.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-black">Roles</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-black">Role</h2>
          <input
            type="text"
            className="w-full p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Name"
            value={roleName}
            onChange={handleRoleNameChange}
          />
          <button
            className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-transform transform hover:scale-105"
          >
            Save
          </button>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-black">Role List</h2>
          <input
            type="text"
            className="w-full p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            placeholder="Search"
            value={search}
            onChange={handleSearchChange}
          />

          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-3 text-black">Role</th>
                <th className="border p-3 text-black">Type</th>
                <th className="border p-3 text-black">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredRoles.map((role) => (
                <tr
                  key={role._id}
                  className="hover:bg-gray-100 transition-transform transform hover:scale-105"
                >
                  <td className="border p-3 text-black">{role.name}</td>
                  <td className="border p-3 text-black">{role.type}</td>
                  <td className="border p-3 flex gap-2 justify-center">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => handleEditRole(role)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-sm text-black">
            Records: {filteredRoles.length} of {roles.length}
          </p>
        </div>
      </div>

      {openEditDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg transform transition-transform scale-95 hover:scale-100">
            <h3 className="text-xl font-semibold mb-4 text-black">Edit Role</h3>
            <input
              type="text"
              className="w-full p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              placeholder="Role Name"
              value={editRoleName}
              onChange={(e) => setEditRoleName(e.target.value)}
            />
            <input
              type="text"
              className="w-full p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              placeholder="Role Type"
              value={editRoleType}
              onChange={(e) => setEditRoleType(e.target.value)}
            />
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 text-gray-700 hover:underline"
                onClick={() => setOpenEditDialog(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-transform transform hover:scale-105"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Roles;
