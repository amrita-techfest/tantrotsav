import React from "react";
import TopContent from "./TopContent";
import "../index.css";
import About from "./About";
import Footer from "./Footer";
import EventsSilder from "./EventsSilder";
import Contact from  "./Contact"

function Home({isOpen}) {
  return (
    <div className="home">
      <TopContent isOpen={isOpen} />
      <EventsSilder />
      <About />
      {/* <About />
      <Footer /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
