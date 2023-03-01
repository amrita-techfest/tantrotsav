import React from "react";
import TopContent from "./TopContent";
import "../index.css";
import About from "./About";

function Home() {
  return (
    <div className="home">
      <TopContent />
      <About />
    </div>
  );
}

export default Home;
