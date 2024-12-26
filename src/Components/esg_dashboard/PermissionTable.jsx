import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Checkbox, Paper, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';

const PermissionTable = () => {
  const [permissions, setPermissions] = useState({
    'Edit/Add New Company': { view: false, add: false, edit: false, delete: false },
    'View Company': { view: false, add: false, edit: false, delete: false },
    'Search': { view: false, add: false, edit: false, delete: false },
    'Metric(Add/Edit)': { view: false, add: false, edit: false, delete: false },
    'Company ESG Data(ESG Data Entry)': { view: false, add: false, edit: false, delete: false },
  });

  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/roles')
      .then(response => {
        setRoles(response.data);
        setSelectedRole(response.data[0]?.name || '');
      })
      .catch(error => {
        console.error('Error fetching roles:', error);
      });

    if (selectedRole) {
      axios.get(`http://localhost:5000/api/permissions/${selectedRole}`)
        .then(response => {
          setPermissions(response.data.permissions || permissions);
        })
        .catch(error => {
          console.error('Error fetching permissions:', error);
        });
    }
  }, [selectedRole, permissions]);

  const handleCheckboxChange = (feature, field) => {
    setPermissions(prevPermissions => ({
      ...prevPermissions,
      [feature]: {
        ...prevPermissions[feature],
        [field]: !prevPermissions[feature][field]
      }
    }));
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSavePermissions = () => {
    axios.post(`http://localhost:5000/api/permissions/${selectedRole}`, { permissions })
      .then(response => {
        console.log('Permissions saved:', response.data);
      })
      .catch(error => {
        console.error('Error saving permissions:', error);
      });
  };

  return (
    <div className="grid gap-6 mt-14">
    <TableContainer component={Paper}>
      <Typography variant="h6" gutterBottom style={{ padding: '16px' }}>
        Assign Permission ({selectedRole})
      </Typography>
      <div style={{ padding: '16px' }}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Select Role</InputLabel>
          <Select
            value={selectedRole}
            onChange={handleRoleChange}
            label="Select Role"
          >
            {roles.map(role => (
              <MenuItem key={role._id} value={role._id}>
                {role.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <Table aria-label="permission table">
        <TableHead>
          <TableRow>
            <TableCell>Feature</TableCell>
            <TableCell>View</TableCell>
            <TableCell>Add</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(permissions).map((feature) => (
            <TableRow key={feature} className="hover:bg-gray-100 transition duration-200">
              <TableCell>{feature}</TableCell>
              <TableCell>
                <Checkbox
                  checked={permissions[feature].view}
                  onChange={() => handleCheckboxChange(feature, 'view')}
                />
              </TableCell>
              <TableCell>
                <Checkbox
                  checked={permissions[feature].add}
                  onChange={() => handleCheckboxChange(feature, 'add')}
                />
              </TableCell>
              <TableCell>
                <Checkbox
                  checked={permissions[feature].edit}
                  onChange={() => handleCheckboxChange(feature, 'edit')}
                />
              </TableCell>
              <TableCell>
                <Checkbox
                  checked={permissions[feature].delete}
                  onChange={() => handleCheckboxChange(feature, 'delete')}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div style={{ padding: '16px' }}>
        <button onClick={handleSavePermissions} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Save Permissions</button>
      </div>
    </TableContainer>
    </div>
  );
};

export default PermissionTable;
