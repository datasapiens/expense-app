import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faHouse } from "@fortawesome/free-solid-svg-icons";
import "./SideNav.scss";
import { useState } from "react";

const SideNav = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index: number) => {
    setToggleState(index);
  };
  return (
    <>
      <nav className="sidebar">
        <Link to={"/"} onClick={() => toggleTab(1)} className={toggleState === 1 ? "link active" : "link"}>
          <FontAwesomeIcon icon={faHouse} className="icon" />
          Home
        </Link>
        <Link to={"/graphs"} onClick={() => toggleTab(2)} className={toggleState === 2 ? "link active" : "link"}>
          <FontAwesomeIcon icon={faChartLine} className="icon" />
          Graphs
        </Link>
      </nav>
    </>
  );
};

export default SideNav;
