import React from "react";
import "./backend.css";
import Img from "../../resources/images/inspiration.svg";

const Backend = () => {
  return (
    <div>
      <div className="backendContainer">
        <div className="backendInfo">
          <h2 className="backendHeader">Backend 🏗️</h2>
          <p className="backendDetails">
            I build stable and sustainable APIs using NodeJs
          </p>
        </div>
        <img className="backendImage" src={Img} alt="computer person" />
      </div>
    </div>
  );
};

export default Backend;
