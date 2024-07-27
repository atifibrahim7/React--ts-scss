import React from 'react';
import { FaHome, FaChartLine, FaEnvelope, FaEllipsisH } from 'react-icons/fa';
import './IconSidebar.css'; // Update CSS file name

const IconSidebar: React.FC = () => {
  return (
    <div className="icon-sidebar">
      <div className="icon">
        <FaHome />
        <span>Home</span> {/* Add new span element */}
      </div>
      <div className="icon">
        <FaChartLine />
        <span>Analytics</span> {/* Add new span element */}
      </div>
      <div className="icon">
        <FaEnvelope />
        <span>Messages</span> {/* Add new span element */}
      </div>
      <div className="icon">
        <FaEllipsisH />
        <span>More</span> {/* Add new span element */}
      </div>
    </div>
  );
};

export default IconSidebar;
