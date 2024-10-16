import { NavLink } from "react-router-dom";
import "./Header.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  const [menuOpen, setMenuOpen] = useState(!isMobile);

  const toggleMenu = () => {
    if (isMobile) {
      setMenuOpen((menuOpen) => !menuOpen);
    }
  };

  return (
    <div className="header">
      <div className="flex py-8">
        <Bars3Icon
          className="w-5 text-white"
          onClick={toggleMenu}
          style={{ display: isMobile ? "block" : "none" }}
        />
        <a
          className="ml-2 bg-[url('/images/logo.png')] w-52 h-8 bg-no-repeat"
          href="/"
        ></a>
      </div>
      <ul
        className="horizontal"
        style={{ display: menuOpen ? "block" : "none" }}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleMenu}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/paintings"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleMenu}
          >
            PAINTINGS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/learn"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleMenu}
          >
            LEARN
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleMenu}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleMenu}
          >
            CONTACT
          </NavLink>
        </li>
        <li className="icon" onClick={toggleMenu}>
          <XMarkIcon className="w-5 text-white" />
        </li>
      </ul>
    </div>
  );
};

// const Header = () => {
//   function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }

//   return (
//     <>
//       <a className="logo"></a>
//       <Bars3Icon className="size-12 text-blue-500" />
//       <div className="topnav" id="myTopnav">
//         <NavLink
//           to="/"
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           HOME
//         </NavLink>
//         <NavLink
//           to="/paintings"
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           PAINTINGS
//         </NavLink>
//         <NavLink
//           to="/about"
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           ABOUT
//         </NavLink>
//         <NavLink
//           to="/contact"
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           CONTACT
//         </NavLink>{" "}
//         <a href="javascript:void(0);" className="icon" onClick={myFunction}>
//           <Bars3Icon className="size-12 text-blue-500" />
//         </a>
//       </div>
//     </>
//   );
// };
export default Header;
