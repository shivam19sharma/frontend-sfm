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
    <div className="h-screen w-64 bg-gray-100 text-black flex flex-col fixed top-10 md:w-72 lg:w-80 shadow-lg">
      <div className="p-6 text-2xl font-bold text-center border-b border-gray-300">S.F.M</div>
      <ul className="mt-6 space-y-3 px-3">
        {[
          { name: 'Home', path: '/dashboard', icon: faHome },
          { name: 'Companies', path: '/companies', icon: faBuilding },
          { name: 'Metrics', path: '/metrics', icon: faChartLine },
          { name: 'CompanyEsgData', path: '/CompanyEsgData', icon: faChartLine },
          { name: 'Reports', path: '/reports', icon: faFileAlt },
          { name: 'Users', path: '/users', icon: faUsers },
          { name: 'Roles', path: '/Roles', icon: faUsers },
          { name: 'Permissions', path: '/Permissiontable', icon: faUsers },
          { name: 'Upload Metrics', path: '/FileUpload', icon: faUsers },
          { name: 'Projectboundary', path: '/Projectboundary', icon: faUsers },
        ].map((item) => (
          <li
            key={item.name}
            className={`p-4 cursor-pointer transition-transform transform hover:scale-105 duration-200 ease-in-out shadow-md rounded-lg ${
              activeItem === item.name ? 'bg-gray-300' : 'hover:bg-gray-200'
            }`}
            onClick={() => handleItemClick(item.name)}
          >
            <Link to={item.path} className="flex items-center gap-2">
              <FontAwesomeIcon icon={item.icon} /> <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-auto p-6 text-center border-t border-gray-300">&copy; 2024 S.F.M</div>

      {/* 3D Animation Effect */}
      <style jsx>{`
        li:hover {
          background: linear-gradient(145deg, #ffffff, #e6e6e6);
          box-shadow: 5px 5px 10px #d1d1d1, -5px -5px 10px #ffffff;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
