import React from "react";
import "../styles/Header.css";
const Header: React.FC = () => {
  return (
    <header className="header">
      <input type="text" placeholder="Search QLU Recruiting" />
    </header>
  );
};

export default Header;
