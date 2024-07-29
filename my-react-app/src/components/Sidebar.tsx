import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../styles/Sidebar.scss";
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
            <Link to="/dashboard/chat">
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
                  <Link to="/dashboard/groups">Log Rocket Updates</Link>
                </li>
                <li>
                  <Link to="/dashboard/groups">Random</Link>
                </li>
                <li>
                  <Link to="/dashboard/groups">General</Link>
                </li>
                <li>
                  <Link to="/dashboard/groups">HR</Link>
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
                  <Link to="/dashboard/chat">Ashir Manzoor</Link>
                </li>
                <li>
                  <Link to="/dashboard/chat">Fahad Jalal</Link>
                </li>
                <li>
                  <Link to="/dashboard/chat">Yashua Parvez</Link>
                </li>
                <li>
                  <Link to="/dashboard/chat">Aneeq Akber</Link>
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
