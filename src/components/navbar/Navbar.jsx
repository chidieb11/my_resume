import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
  }, []);

  return (
    <div className="navContainer">
      <div className="section">
        <Link to="/">
          <div className="logo">Chidiebere 👋</div>
        </Link>
        {(toggleMenu || screenWidth > 1100) && (
          <ul className="listItems">
            <Link to="/">
              <li className="listItem active">Home</li>
            </Link>
            <Link to="/education">
              <li className="listItem">Education</li>
            </Link>
            <Link to="/experience">
              <li className="listItem">Experience</li>
            </Link>
            <Link to="/projects">
              <li className="listItem">Projects</li>
            </Link>
            <Link to="/contact">
              <li className="listItem">Contact Me</li>
            </Link>
          </ul>
        )}
        <button onClick={toggleNav} className="navBtn">
          Menu
        </button>
      </div>
    </div>
  );
};

export default Navbar;
