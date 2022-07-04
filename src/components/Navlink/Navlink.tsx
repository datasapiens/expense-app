import { NavLink, NavLinkProps } from "react-router-dom";
import styles from "./Navlink.module.scss";

export type NavlinkProps = NavLinkProps;

export const Navlink = (props: NavlinkProps) => (
  <NavLink {...props} className={({ isActive }) => (isActive ? styles.active : undefined)} />
);
