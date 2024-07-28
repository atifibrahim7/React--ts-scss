import React from "react";
import { FaHome, FaChartLine, FaEnvelope, FaEllipsisH } from "react-icons/fa";
import "./IconSidebar.scss"; // Ensure your CSS file is named appropriately

const IconSidebar: React.FC = () => {
  return (
    <div className="icon-sidebar">
      <div className="icons-top">
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
      <div className="icon-bottom">
        <div className="icon-plus">+ </div>
        <button className="iconbar-add"></button>
      </div>
    </div>
  );
};

export default IconSidebar;
