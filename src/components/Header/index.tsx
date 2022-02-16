import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Header = () => (
  <div className="headerContainer">
    <Link className="routerLinks" to={"/"}>Expenses App</Link>
    <Link className="routerLinks" to={"/graphs"}>Charts</Link>
  </div>
);

export default Header;
