import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="menu">
        <li className="sidebar-link">
          <a href="#">HOME</a>
          <br></br>
        </li>
        <li className="sidebar-link">
          <a href="#" className="sidebar-link">
            ABOUT
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
