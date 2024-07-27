import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Link to="/home" className="sidebar-logo">
          <img src="/path/to/logo.png" alt="Logo" />
        </Link>
        <h2>QLU Recruiting</h2>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/activity">Activity</Link></li>
          <li><Link to="/dms">DMs</Link></li>
          <li><Link to="/more">More</Link></li>
        </ul>
      </div>
      <div className="sidebar-groups">
        <h3>Groups</h3>
        <ul>
          <li><Link to="/group/log-rocket-updates">Log Rocket Updates</Link></li>
          <li><Link to="/group/random">Random</Link></li>
          <li><Link to="/group/general">General</Link></li>
          <li><Link to="/group/hr">HR</Link></li>
        </ul>
      </div>
      <div className="sidebar-dms">
        <h3>Direct Messages</h3>
        <ul>
          <li><Link to="/dm/ashir-manzoor">Ashir Manzoor</Link></li>
          <li><Link to="/dm/fahad-jalal">Fahad Jalal</Link></li>
          <li><Link to="/dm/yashua-parvez">Yashua Parvez</Link></li>
          <li><Link to="/dm/anee-akeber">Aneeq Akber</Link></li>
        </ul>
      </div>
      <div className="sidebar-footer">
        <button className="sidebar-add">+</button>
        <div className="sidebar-profile">
          <img src="/path/to/profile-pic.png" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
