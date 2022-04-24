import React, { useEffect, useState } from "react";
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
        <div className="logo">Chidiebere 👋</div>
        {(toggleMenu || screenWidth > 1100) && (
          <ul className="listItems">
            <li className="listItem active">Home</li>
            <li className="listItem">Education</li>
            <li className="listItem">Experience</li>
            <li className="listItem">Projects</li>
            <li className="listItem">Contact Me</li>
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
