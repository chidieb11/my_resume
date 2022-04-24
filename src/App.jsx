import React from "react";
import Hero from "./components/hero_section/Hero";
import Navbar from "./components/navbar/Navbar";
import Frontend from "./components/frontend/Frontend";
import Backend from "./components/backend/Backend";
import Footer from "./components/footer/Footer";
import DbCloud from "./components/cloud/DbCloud";

const App = () => {
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

export default App;
