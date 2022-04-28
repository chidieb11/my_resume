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
          <a
            href="https://docs.google.com/document/d/1h3MJ6sq-PozX1v29WUUxHBmgIoFNrxqKkuOsxiXyUfY/edit"
            target="_blank"
          >
            <button className="contactBtn">See My Resume 📰</button>
          </a>
        </div>
      </div>
      {/* Second section */}
      <div className="secondSection contactContainer scale-in-center">
        <div className="contactInfo">
          <h2 className="contactHeader">Blog 📑</h2>
          <p className="contactDetails">
            For individual fundamental empowerment, I like to write powerful
            lessons that create impact on each of the reader individually to
            change the core of their character.
          </p>
          <a
            href="https://dev.to/chidieb11/my-journey-so-far-on-learning-to-write-the-mern-stack-50b5"
            target="_blank"
          >
            <button className="contactBtn ssecondBtn">Visit My Blog 🥰</button>
          </a>
        </div>
        <img className="contactImg" src={Blog} alt="computer person" />
      </div>
      {/* Last Section */}
      <div className="thirdSecond contactContainer scale-in-center">
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
