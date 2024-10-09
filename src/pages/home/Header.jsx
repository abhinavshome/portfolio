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
          <a>COURSES</a>
        </li>
        <li>
          <a>ABOUT</a>
        </li>
        <li>
          <a>CONTACT</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
