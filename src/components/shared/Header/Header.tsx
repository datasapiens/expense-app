import { NavLink } from "react-router-dom";
import './Header.scss';

const Header = () => {
  const activeClassName = 'active-item';
  const navLinkClass = 'item';

  return (
    <nav className="header">
      <NavLink 
        to='/' 
        className={({ isActive }) => isActive ? `${navLinkClass} ${activeClassName}` : navLinkClass}
      >
        Home <i style={{ paddingLeft: '4px'}} className="fa-solid fa-house"></i>
      </NavLink>
      <NavLink 
        to='/dash' 
        className={({ isActive }) => isActive ? `${navLinkClass} ${activeClassName}` : navLinkClass}
      >
        Dashboard <i style={{ paddingLeft: '4px'}} className="fa-solid fa-chart-line"></i>
      </NavLink>
    </nav>
  )
}

export default Header;