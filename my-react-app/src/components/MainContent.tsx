import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import React from "react";
import "./MainContent.scss";

const MainContent: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };  
  return (
    <div className="main-content">
      <h1>Pulse</h1>
      <p>Connect, Communicate, Create</p>
      <p>Your journey with pulse begins here!</p>
      <img src="my-react-app\src\assets\react.svg" alt="ss" />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default MainContent;
