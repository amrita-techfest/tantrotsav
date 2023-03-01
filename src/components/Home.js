import React from "react";
import Events from "./Events";
import TopContent from "./TopContent";
import Footer from "./Footer";
import "../index.css";

function Home() {
  return (
    <div className="home">
      <TopContent />
      <Events />
      <Footer />

    </div>
  );
}

export default Home;
