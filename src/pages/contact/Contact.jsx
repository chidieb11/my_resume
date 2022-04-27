import React from "react";
import "./contact.css";
import Img from "../../resources/images/contact.svg";
import Blog from "../../resources/images/blog.svg";
import Address from "../../resources/images/calculator.svg";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contactContainer scale-in-center">
        <img className="contactImg" src={Img} alt="computer person" />
        <div className="contactInfo">
          <h2 className="contactHeader">Contact me 📧</h2>
          <p className="contactDetails">
            I am available on almost every social media. You can message me, I
            will reply within 24 hours. I can help you with HTML, CSS,
            JavaScript, React, Node, and Opensource Development.
          </p>
          <div className="contactSocials">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-solid fa-mailbox"></i>
          </div>
          <button className="contactBtn">See My Resume 📰</button>
        </div>
      </div>
      {/* Second section */}
      <div className="secondSection contactContainer">
        <div className="contactInfo">
          <h2 className="contactHeader">Blog 📑</h2>
          <p className="contactDetails">
            For individual fundamental empowerment, I like to write powerful
            lessons that create impact on each of the reader individually to
            change the core of their character.
          </p>
          <button className="contactBtn ssecondBtn">Visit My Blog 🥰</button>
        </div>
        <img className="contactImg" src={Blog} alt="computer person" />
      </div>
      {/* Last Section */}
      <div className="thirdSecond contactContainer">
        <img
          className="contactImg lastImg"
          src={Address}
          alt="computer person"
        />
        <div className="contactInfo">
          <h2 className="contactHeader">Address 🛩️</h2>
          <p className="contactDetails address">
            9 Amogbo Lane, Nsukka. <br /> Enugu state. <br /> Nigeria
          </p>
          <h2 className="contactHeader phone_no">Phone number ☎️</h2>
          <p className="contactDetails contact">+234 810 756 5155</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
