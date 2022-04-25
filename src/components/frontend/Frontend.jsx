import React from "react";
import "./frontend.css";
import Img from "../../resources/images/static_website.svg";

const Frontend = () => {
  return (
    <div className="scale-in-center">
      <h1 className="frontendTitle">What I do</h1>
      <div className="frontendContainer tracking-in-expand">
        <img className="frontendImage" src={Img} alt="computer person" />
        <div className="frontendInfo">
          <h2 className="frontendHeader">Frontend 🍽️</h2>
          <p className="frontendDetails">
            Though I am just starting out, I build highly scalable products
            using HTML, CSS, JavaScript and ReactJs that are fully mobile
            responsive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
