import { NavLink } from "react-router-dom";
import "./Header.css";

// const Header = () => {
//   return (
//     <div className="header">
//       <a className="logo"></a>
//       <ul className="horizontal">
//         <li>
//           <NavLink
//             to="/"
//             className={({ isActive }) => (isActive ? "active" : "")}
//           >
//             HOME
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/paintings"
//             className={({ isActive }) => (isActive ? "active" : "")}
//           >
//             PAINTINGS
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/learn"
//             className={({ isActive }) => (isActive ? "active" : "")}
//           >
//             LEARN
//           </NavLink>
//         </li>
//         <li>

//         </li>
//         <li>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) => (isActive ? "active" : "")}
//           >
//             CONTACT
//           </NavLink>
//         </li>
//         <li className="icon">
//           =
//         </li>
//       </ul>
//     </div>
//   );
// };

const Header = () => {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <>
      <a className="logo"></a>
      <div className="topnav" id="myTopnav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          HOME
        </NavLink>
        <NavLink
          to="/paintings"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          PAINTINGS
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          CONTACT
        </NavLink>{" "}
        <a href="javascript:void(0);" className="icon" onClick={myFunction}>
          =
        </a>
      </div>
    </>
  );
};
export default Header;
