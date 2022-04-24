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
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
          <button className="btn">Give me a ⭐ on GitHub</button>
        </div>
        <img className="img" src={Img} alt="computer person" />
      </div>
    </div>
  );
};

export default Hero;
