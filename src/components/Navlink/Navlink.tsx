import { NavLink, NavLinkProps } from "react-router-dom";
import styles from "./Navlink.module.scss";

export interface NavlinkProps extends NavLinkProps {
  to: string;
}

export const Navlink = (props: NavlinkProps) => (
  <NavLink {...props} className={({ isActive }) => (isActive ? styles.active : undefined)} />
);
