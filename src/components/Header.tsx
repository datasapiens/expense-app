import { Link } from "react-router-dom";
import "./Header.css";
import { AiOutlineHome } from "react-icons/ai";
import { VscGraphLine } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h2>Expense App</h2>
      </Link>

      <div className="headerLinks">
        <div className="homepage">
          <AiOutlineHome className="icon" />
          <Link to="/">Home</Link>
        </div>

        <div className="graphPage">
          <VscGraphLine className="icon" />
          <Link to="/graphs">Graphs</Link>
        </div>

        <div className="loginAccount">
          <VscAccount className="icon" />
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
