import React from "react";
import { Link } from "react-router-dom";
import './SideNav.scss';

const SideNav = () => {
  return (
    <>
      <nav className="sidebar">
        <Link to={'/'} className="link">Home</Link>
        <Link to={'/graphs'} className="link">Graphs</Link>
      </nav>
    </>
  );
};

export default SideNav;
