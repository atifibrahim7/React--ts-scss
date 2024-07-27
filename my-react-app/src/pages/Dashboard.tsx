import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import IconSidebar from '../components/IconSidebar';
import './Dashboard.scss';

const Dashboard: React.FC = () => {


  return (
    <div>
        <Header />
    <div className="dashboard">

      <IconSidebar />
      <Sidebar />
      <div className="dashboard-content">
        <MainContent />
        
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
