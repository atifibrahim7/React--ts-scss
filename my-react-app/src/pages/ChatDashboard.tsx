import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import IconSidebar from "../components/IconSidebar";
import Chat from "../components/Chat";
import "../styles/Dashboard.scss";
const ChatDashboard: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="dashboard">
        <IconSidebar />
        <Sidebar />
        <div className="dashboard-content">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ChatDashboard;
