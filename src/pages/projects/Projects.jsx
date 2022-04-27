import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import ProjectImage from "./../../resources/images/projects.svg";
import Product from "./../../resources/images/FCC-Product-Landing-Page.png";
import Personal from "./../../resources/images/Personal-Portfolio.png";
import Shop from "./../../resources/images/React-App.png";

import "./projects.css";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="projectContainer scale-in-center">
        <div className="projectMain ">
          <img
            className="projectImage"
            src={ProjectImage}
            alt="project image"
          />
          <div className="projectDetails">
            <h3 className="projectTitle">Projects 📽️</h3>
            <p className="projectBody">
              My projects makes use of vast variety of latest technology tools.
              My best experience is to create highly scalable projects and
              deploy them to web applications using cloud infrastructure.
            </p>
          </div>
        </div>

        <div className="projectCards">
          <div className="card">
            <img className="cardImage" src={Product} alt="" />
            <h4 className="cardTitle">Trombone</h4>
            <p className="cardDetail">
              Trombone is one of the recommended final projects from the
              freecodecamp course on building responsive web apps.
            </p>
          </div>
          <div className="card">
            <img className="cardImage" src={Personal} alt="" />
            <h4 className="cardTitle">Portfolio</h4>
            <p className="cardDetail">
              This portfolio web app was one of the pet projects I built while I
              was practicing on one of the weekends. The goal was to build a
              single page portfolio app.
            </p>
          </div>
          <div className="card">
            <img className="cardImage" src={Shop} alt="" />
            <h4 className="cardTitle">Shop</h4>
            <p className="cardDetail">
              This shop app was a project I worked on while taking my first
              course in my early days of learning to use the ReactJs library.
            </p>
          </div>
        </div>
        <button className="projectBtn">click to see more </button>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
