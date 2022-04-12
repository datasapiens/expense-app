import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header__item">
        Dashboard
      </Link>
      <Link to="/graph" className="header__item">
        Graph
      </Link>
    </div>
  );
};

export default Header;
