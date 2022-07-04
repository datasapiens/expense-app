import { Navlink } from "../Navlink/Navlink";
import styles from "./Navbar.module.scss";

export const Navbar = () => (
  <nav className={styles.navbar}>
    <ul>
      <li>
        <Navlink to="/">Home</Navlink>
      </li>
      <li>
        <Navlink to="/graphs">Graphs</Navlink>
      </li>
    </ul>
  </nav>
);
