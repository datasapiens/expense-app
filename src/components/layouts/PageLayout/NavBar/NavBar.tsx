import { NavLink } from "react-router-dom";
import style from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <nav className={style.nav}>
      <NavLink to="/"> Transactions </NavLink>
      <NavLink to="/info"> Graphs </NavLink>
    </nav>
  );
};
