import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Expense App</h2>
      <div className="sidebarBottom">
        <div className="sidebarHome">
          <Link to="/">Home</Link>
        </div>
        <div className="sidebarGraph">
          <Link to="/graphs">Graphs</Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
