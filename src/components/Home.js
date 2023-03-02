import React from "react";
import TopContent from "./TopContent";
import "../index.css";
import About from "./About";
import Footer from "./Footer";
import Contact from  "./Contact"
function Home() {
  return (
    <div className="home">
      <TopContent />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
