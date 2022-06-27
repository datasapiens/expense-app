import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss'

export function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            to="/charts"
          >
            Charts
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
