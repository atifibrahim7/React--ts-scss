import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import IconSidebar from "../components/IconSidebar";
import "../styles/Dashboard.scss";
const Dashboard: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="dashboard">
        <IconSidebar />
        <Sidebar />
        <div className="dashboard-content">
          <MainContent />
          {/* <Routes>
            <Route path="/chat" element={<Chat />} />
            <Route path="/" element={<MainContent />} />
            <Route path="/groups" element={<Chat />} />
          </Routes> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
