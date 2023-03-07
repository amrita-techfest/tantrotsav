import React from "react";
import TopContent from "./TopContent";
import "../index.css";
import About from "./About";
import Footer from "./Footer";
import EventsSilder from "./EventsSilder";
import Faq from "../Faq";

function Home({ isOpen }) {
  return (
    <div className="home">
      <TopContent isOpen={isOpen} />
      <EventsSilder />
      <About />
      <Faq />
      <Footer />
    </div>
  );
}

export default Home;
