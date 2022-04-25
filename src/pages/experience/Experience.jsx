import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import ExperienceImage from "./../../resources/images/experience.svg";
import ByteworksBadge from "./../../resources/images/byteworks.jpg";
import "./experience.css";

const Experience = () => {
  return (
    <div>
      <Navbar />
      <div className="experienceContainer scale-in-center">
        <div className="personalDetails">
          <img
            className="experienceImage"
            src={ExperienceImage}
            alt="educational image"
          />
          <div className="experienceDetails">
            <h3 className="experienceHeading">Internship 💻</h3>
            <p className="experienceSubHeading">Junior Fullstack Developer</p>
            <p className="qualification">
              I interned at Byteworks Technology as a junior fullstack developer
              for a duration of four months. During my time there, I contributed
              to the building of few highly scalable solutions where I was
              tasked with the responsibility of ensuring the solutions passed
              end to end testing before they are deployed to production.
            </p>
            <img
              className="byteworks_badge"
              src={ByteworksBadge}
              alt="byteworks badge"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Experience;
