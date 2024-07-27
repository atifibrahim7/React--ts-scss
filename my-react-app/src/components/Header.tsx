import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <input type="text" placeholder="Search QLU Recruiting" />
    </header>
  );
};

export default Header;
