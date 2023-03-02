import React from "react";
import TopContent from "./TopContent";
import "../index.css";
import About from "./About";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home">
      <TopContent />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
