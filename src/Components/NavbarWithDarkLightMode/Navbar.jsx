import React from "react";
import "./Navbar.css";
import logoWhite from "../../assets/logo-white.png";
import logoDark from "../../assets/logo-black.png";
import dayIcon from "../../assets/day.png";
import nightIcon from "../../assets/night.png";
import searchLightIcon from "../../assets/search-w.png";
import searchNightIcon from "../../assets/search-b.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    console.log("toggleTheme");

    theme == "light" ? setTheme("dark") : setTheme("light");
  };


  //Another way to style active links

  // const NavLinkstyles = ({isActive})=>{
  //   return{
  //     color:isActive ? "green" : "pink"
  //   }
  // }

  return (
    <>
      <div className="Navbar">
        <Link to="/">
          <img
            src={theme == "light" ? logoDark : logoWhite}
            alt="logo"
            className="Logo"
          />
        </Link>

        <ul>
          <li>
            {/* <NavLink to="/" style={NavLinkstyles}>Home</NavLink> */}
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>

        <div className="Search-box">
          <input type="text" placeholder="Search" />
          <img
            src={theme == "light" ? searchLightIcon : searchNightIcon}
            alt="Search"
          />
        </div>

        <img
          onClick={toggleTheme}
          src={theme == "light" ? nightIcon : dayIcon}
          alt="Icon"
          className="ToggleIcon"
        />
      </div>
    </>
  );
};

export default Navbar;
