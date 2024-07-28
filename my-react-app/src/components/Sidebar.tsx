import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./Sidebar.scss";
import { FaUsers, FaEnvelope } from "react-icons/fa";
const Sidebar: React.FC = () => {
  const [isGroupsOpen, setIsGroupsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleGroups = () => {
    setIsGroupsOpen(!isGroupsOpen);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>QLU Recruiting</h2>
      </div>
      <div className="sidebar-links">
        <ul>
          <li>
            <Link to="/dashboard/groups">
              <FaUsers />
              Groups
            </Link>
          </li>
          <li>
            <Link to="/dashboard/direct-messages">
              <FaEnvelope />
              Direct Messages
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-dropdowns">
        <ul>
          <li>
            <button onClick={toggleGroups} className="dropdown-btn">
              Groups
              <RiArrowDropDownLine />
            </button>
            {isGroupsOpen && (
              <ul className="dropdown-content">
                <li>
                  <Link to="/group/log-rocket-updates">Log Rocket Updates</Link>
                </li>
                <li>
                  <Link to="/group/random">Random</Link>
                </li>
                <li>
                  <Link to="/group/general">General</Link>
                </li>
                <li>
                  <Link to="/group/hr">HR</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={toggleChat} className="dropdown-btn">
              Direct Messages
              <RiArrowDropDownLine />
            </button>
            {isChatOpen && (
              <ul className="dropdown-content">
                <li>
                  <Link to="/dm/ashir-manzoor">Ashir Manzoor</Link>
                </li>
                <li>
                  <Link to="/dm/fahad-jalal">Fahad Jalal</Link>
                </li>
                <li>
                  <Link to="/dm/yashua-parvez">Yashua Parvez</Link>
                </li>
                <li>
                  <Link to="/dm/anee-akeber">Aneeq Akber</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
