import React from "react";
import "./hero.css";
import Img from "../../resources/images/computer-person.svg";

const Hero = () => {
  return (
    <div>
      <div className="heroContainer scale-in-center">
        <div className="info">
          <h2 className="header">Chidiebere 😊</h2>
          <p className="details">
            I am a passionate individual who always thrive to work on end to end
            products which develop sustainable and scalable social and technical
            systems to create impact.
          </p>
          <div className="socials">
            <a href="https://twitter.com/weird_codes" target="_blank">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="https://github.com/chidieb11" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://mail.google.com" target="_blank">
              <i class="fa-solid fa-envelope-circle-check"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/chukwu-chidiebere-662a761a9/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://web.facebook.com/chukwu.john.39142"
              target="_blank"
            >
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/chukwu.john.39142/"
              target="_blank"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
          <a href="https://github.com/chidieb11/my_resume" target="_blank">
            <button className="btn">Give me a ⭐ on GitHub</button>
          </a>
        </div>
        <img className="img" src={Img} alt="computer person" />
      </div>
    </div>
  );
};

export default Hero;
