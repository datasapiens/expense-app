import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';

const Nav = (): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="graphs"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Graphs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
