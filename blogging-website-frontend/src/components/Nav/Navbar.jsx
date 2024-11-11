import React, { useState, useEffect, useRef, useContext } from "react";
import { assets } from "../../assets/assets.js";
import "./Navbar.css";
import "./script.js";
import { Link } from "react-router-dom";
import { UserContext } from "../../App.jsx";

const Navbar = () => {
  const [set, setValue] = useState(true);
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    document.querySelector("body").className = theme;
  }, [theme]);
  const Light = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    setValue(!set);
  };
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };


  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img className="logo" src={assets.Dlogo} alt="" />
        </Link>
        <i
          onClick={openMenu}
          className="fa-sharp-duotone fa-solid fa-bars-staggered nav-mob-open"
        ></i>
        <ul ref={menuRef} className="nav-menu">
          <i
            onClick={closeMenu}
            className="fa-solid fa-xmark nav-mob-close"
          ></i>
          <li>
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <p>About Me</p>
            </Link>
          </li>
          <li>
            <Link to="/service">
              <p>Service</p>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <p>Contact</p>
            </Link>
          </li>
          <li>
          <Link to="/blog">
          
              <p>Blog</p>
          </Link>
            
          </li>
          <li>
            <Link to="/Listen">
              <p>Listen</p>
            </Link>
        
          </li>
          <li>
            <Link to ="/Watch">
              <p>Watch</p>
            </Link>
            
          </li>
        </ul>

        <div className="L-Mode">
          <button
            className={`L-Mode fa-solid fa-sun ${
              set ? "fa-solid fa-moon" : ""
            }`}
            onClick={() => Light()}
          ></button>
        </div>
        <Link to="/signin">
        <i  className="fa-solid fa-user user"></i>
        </Link>

        <div className="nav-connect">
          <i
            className="fa-solid fa-xmark nav-mob-close"
          ></i>

        {
      
          <>
            
          <Link className="btn-dark py-2" to="/signin">
            Log in
          </Link>
          <Link className="btn-light py-2 hidden md:block" to="/signup">
            Sign up
          </Link>
          </>
        }
            

          
        </div>
      </div>
    </>
  );
};

export default Navbar;
