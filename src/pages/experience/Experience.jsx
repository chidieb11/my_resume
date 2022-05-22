import React from "react";
import "./experience.css";
import Img from "../../resources/images/experience.svg";
import Byteworks from "../../resources/images/byteworks.jpg";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Experience = () => {
  return (
    <div>
      <Navbar />
      <div className="experienceContainer scale-in-center">
        <img className="experienceImg" src={Img} alt="computer person" />
        <div className="experienceInfo">
          <h2 className="experienceHeader">Internsip 💻</h2>
          <h4 className="experienceSubHeader">Junior Fullstack Developer</h4>
          <p className="experienceDetails">
            I interned at Byteworks Technology as a junior fullstack developer
            for a duration of four months. During my time there, I contributed
            to the building of few highly scalable solutions where I was tasked
            with the responsibility of ensuring the solutions passed end to end
            testing before they are deployed to production.
          </p>
          <div className="experienceImage">
            <a
              href="https://www.byteworks.com.ng/#byteone"
              target="_blank"
              rel="noreferrer"
            >
              <img className="byteworks" src={Byteworks} alt="" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Experience;
