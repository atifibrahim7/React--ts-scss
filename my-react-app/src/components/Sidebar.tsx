import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../styles/Sidebar.scss";
import { FaUsers, FaEnvelope } from "react-icons/fa";

const groups = [
  { name: "Log Rocket Updates", id: 1 },
  { name: "Random", id: 2 },
  { name: "General", id: 3 },
  { name: "HR", id: 4 },
];

const directMessages = [
  { name: "Ashir Manzoor", id: 1 },
  { name: "Fahad Jalal", id: 2 },
  { name: "Yashua Parvez", id: 3 },
  { name: "Aneeq Akber", id: 4 },
];

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
                {groups.map((group) => (
                  <li key={group.id}>
                    <Link to={`/dashboard/groups/${group.id}`}>
                      {group.name}
                    </Link>
                  </li>
                ))}
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
                {directMessages.map((dm) => (
                  <li key={dm.id}>
                    <Link to={`/dashboard/chat/${dm.id}`}>{dm.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
