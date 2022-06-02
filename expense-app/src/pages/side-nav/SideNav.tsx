import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faHouse } from "@fortawesome/free-solid-svg-icons";
import "./SideNav.scss";

const SideNav = () => {
  return (
    <>
      <nav className="sidebar">
        <Link to={"/"} className="link">
          <FontAwesomeIcon icon={faHouse} className="icon" />
          Home
        </Link>
        <Link to={"/graphs"} className="link">
          <FontAwesomeIcon icon={faChartLine} className="icon" />
          Graphs
        </Link>
      </nav>
    </>
  );
};

export default SideNav;
