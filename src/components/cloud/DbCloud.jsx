import React from "react";
import "./dbCloud.css";
import Img from "../../resources/images/static_website.svg";

const DbCloud = () => {
  return (
    <div>
      <div className="cloudContainer tracking-in-expand">
        <img className="cloudImage" src={Img} alt="computer person" />
        <div className="cloudInfo">
          <h2 className="cloudHeader">DB Mgt ☁️</h2>
          <p className="cloudDetails">
            Have experience working with the MongoDB cloud infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DbCloud;
