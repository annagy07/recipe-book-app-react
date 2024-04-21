import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="menu">
        <NavLink to="/" className="nav-link">
          <li className="sidebar-link">HOME</li>
          <br />
        </NavLink>
        <NavLink to="/about" className="nav-link">
          <li className="sidebar-link">ABOUT</li>
          <br />
        </NavLink>
      </ul>
    </aside>
  );
}

export default Sidebar;
