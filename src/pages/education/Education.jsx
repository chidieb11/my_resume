import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import MainImage from "./../../resources/images/education.svg";
import UnnBadge from "./../../resources/images/unn-badge.png";
import Freecodecamp from "./../../resources/images/freecodecamp.jpg";
import Udemy from "./../../resources/images/udemy.png";
import "./education.css";

const Education = () => {
  return (
    <div>
      <Navbar />
      <div className="eduContainer scale-in-center">
        <div className="main">
          <img src={MainImage} alt="" className="eduImage" />
          <div className="eduDetails">
            <h3 className="eduTitle">Education 🏫</h3>
            <p className="subTitle">Basic Qualification and Certification</p>
            <p className="eduBackground">
              I graduated recently from the University of Nigeria with a
              bachelor's degree in Mathematics.
            </p>
            <img src={UnnBadge} alt="" className="unnBadge" />
          </div>
        </div>

        <div className="eduSection">
          <div className="sectionTitle">Online Qualifications 🏹</div>
          <div className="sectionCard">
            <img
              src={Freecodecamp}
              alt=""
              className="educationImages freecodecamp"
            />
            <img src={Udemy} alt="" className="educationImages udemy" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Education;
