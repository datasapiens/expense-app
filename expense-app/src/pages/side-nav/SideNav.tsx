import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/graphs'}>Graphs</Link>
      </nav>
    </>
  );
};

export default SideNav;
