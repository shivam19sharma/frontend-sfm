import React from 'react';

const Card = ({ title, value, children, className }) => {
  return (
    <div className={`border rounded-lg shadow-md p-4 ${className}`}>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-2xl">{value}</p>
      {children}
    </div>
  );
};

export default Card; 