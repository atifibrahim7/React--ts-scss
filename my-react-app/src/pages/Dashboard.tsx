import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Route, Routes } from "react-router-dom";
import MainContent from "../components/MainContent";
import IconSidebar from "../components/IconSidebar";
import "../styles/Dashboard.scss";
import Chat from "../components/Chat";
const Dashboard: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="dashboard">
        <IconSidebar />
        <Sidebar />
        <div className="dashboard-content">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/direct-messages" element={<Chat />} />
            <Route path="/groups" element={<Chat />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
