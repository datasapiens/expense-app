import { NavLink, NavLinkProps } from "react-router-dom";
import styles from "./Navlink.module.scss";

export const Navlink = (props: NavLinkProps) => (
  <NavLink {...props} className={({ isActive }) => (isActive ? styles.active : undefined)} />
);
