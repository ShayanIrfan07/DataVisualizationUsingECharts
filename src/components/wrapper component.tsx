import React, { useState } from 'react';

interface ChartWrapperProps {
  title: string;
  children: React.ReactNode;
}

const ChartWrapper: React.FC<ChartWrapperProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chart-wrapper">
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          Options
        </button>
        {isOpen && (
          <div className="dropdown-menu dropdown-menu-left">
            {/* Dropdown menu items */}
            <div className="dropdown-item">Item 1</div>
            <div className="dropdown-item">Item 2</div>
            <div className="dropdown-item">Item 3</div>
          </div>
        )}
      </div>
      <h2>{title}</h2>
      <div className="chart-container">{children}</div>
    </div>
  );
};

export default ChartWrapper;
