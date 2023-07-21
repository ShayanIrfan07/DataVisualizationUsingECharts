import React, { useState } from 'react';

interface ChartWrapperProps {
  children: React.ReactNode;
  title: string;
}

const ChartWrapper: React.FC<ChartWrapperProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChartClick = () => {
    console.log(`Chart clicked for component: ${title}`);
    console.log('Chart clicked!');
  };

  return (
    <div className="chart-wrapper">
      <div className="relative">
        <button
          className="dropdown-toggle px-4 py-2"
          onClick={toggleDropdown}
        >
          Options
        </button>
        {isOpen && (
          <div className="absolute left-0 mt-2 p-2">
            <div className="bg-grey border border-blue-700 rounded shadow">
              <div className="dropdown-item">Filled Bottles</div>
              <div className="dropdown-item">CIP</div>
              <div className="dropdown-item">Labeller Production</div>
              <div className="dropdown-item">Labeller Main Motor</div>
              <div className="dropdown-item">Filler Main Motor</div>
            </div>
          </div>
        )}
      </div>
      <div className="chart-box">
        <h2>{title}</h2>
        <div className="chart-container">{children}</div>
      </div>
    </div>
  );
};

export default ChartWrapper;
