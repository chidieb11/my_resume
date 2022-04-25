import React from "react";
import Backend from "../../components/backend/Backend";
import DbCloud from "../../components/cloud/DbCloud";
import Footer from "../../components/footer/Footer";
import Frontend from "../../components/frontend/Frontend";
import Hero from "../../components/hero_section/Hero";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Frontend />
      <Backend />
      <DbCloud />
      <Footer />
    </div>
  );
};

export default Home;
