import { Navlink, NavlinkProps } from "../Navlink/Navlink";
import styles from "./Navbar.module.scss";

export interface NavbarProps {
  links?: NavlinkProps[];
}

export const Navbar = ({ links }: NavbarProps) => (
  <nav className={styles.navbar}>
    <ul>
      {links?.map((linkProps) => (
        <Navlink {...linkProps} />
      ))}
    </ul>
  </nav>
);
