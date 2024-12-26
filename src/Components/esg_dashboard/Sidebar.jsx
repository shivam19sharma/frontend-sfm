import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBuilding, faChartLine, faFileAlt, faUsers } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    
    <div className="sidebar bg-gray-800 text-white w-64 p-4">
      <div className="logo text-xl font-bold">S.F.M</div>
      <ul className="mt-4">
        <li className={`py-2 ${activeItem === 'Home' ? 'bg-gray-700' : ''}`} onClick={() => handleItemClick('Home')}>
          <Link to="/dashboard" className="flex items-center">
            <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
          </Link>
        </li>
        <li className={`py-2 ${activeItem === 'Companies' ? 'bg-gray-700' : ''}`} onClick={() => handleItemClick('Companies')}>
          <Link to="/companies" className="flex items-center">
            <FontAwesomeIcon icon={faBuilding} className="mr-2" /> Companies
          </Link>
        </li>
        <li className={`py-2 ${activeItem === 'Metrics' ? 'bg-gray-700' : ''}`} onClick={() => handleItemClick('Metrics')}>
          <Link to="/metrics" className="flex items-center">
            <FontAwesomeIcon icon={faChartLine} className="mr-2" /> Metrics
          </Link>
        </li>
        <li className={`py-2 ${activeItem === 'CompanyEsgData' ? 'bg-gray-700' : ''}`} onClick={() => handleItemClick('CompanyEsgData')}>
          <Link to="/CompanyEsgData" className="flex items-center">
            <FontAwesomeIcon icon={faChartLine} className="mr-2" /> Company ESG Data
          </Link>
        </li>
        <li className={`py-2 ${activeItem === 'Reports' ? 'bg-gray-700' : ''}`} onClick={() => handleItemClick('Reports')}>
          <Link to="/reports" className="flex items-center">
            <FontAwesomeIcon icon={faFileAlt} className="mr-2" /> Reports
          </Link>
        </li>
        <li className={`py-2 ${activeItem === 'Users' ? 'bg-gray-700' : ''}`} onClick={() => handleItemClick('Users')}>
          <Link to="/users" className="flex items-center">
            <FontAwesomeIcon icon={faUsers} className="mr-2" /> Users
          </Link>
        </li>
        <li className={`py-2 ${activeItem === 'Roles' ? 'bg-gray-700' : ''}`} onClick={() => handleItemClick('Roles')}>
          <Link to="/Roles" className="flex items-center">
            <FontAwesomeIcon icon={faUsers} className="mr-2" /> Roles
          </Link>
        </li>
        <li className={`py-2 ${activeItem === 'Permissiontable' ? 'bg-gray-700' : ''}`} onClick={() => handleItemClick('Permissiontable')}>
          <Link to="/Permissiontable" className="flex items-center">
            <FontAwesomeIcon icon={faUsers} className="mr-2" /> Permissions
          </Link>
        </li>
        <li className={`py-2 ${activeItem === 'FileUpload' ? 'bg-gray-700' : ''}`} onClick={() => handleItemClick('FileUpload')}>
          <Link to="/FileUpload" className="flex items-center">
            <FontAwesomeIcon icon={faUsers} className="mr-2" /> Upload Metrics
          </Link>
        </li>
        <li className={`py-2 ${activeItem === 'ProjectBoundary' ? 'bg-gray-700' : ''}`} onClick={() => handleItemClick('ProjectBoundary')}>
          <Link to="/ProjectBoundary" className="flex items-center">
            <FontAwesomeIcon icon={faUsers} className="mr-2" /> Project Boundary
          </Link>
        </li>
      </ul>
      <div className="footer mt-4"></div>
    </div>
  
  );
};

export default Sidebar;