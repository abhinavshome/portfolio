import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <a className="logo"></a>
      <ul className="horizontal">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/paintings"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            PAINTINGS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/learn"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            LEARN
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
