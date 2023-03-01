import React from "react";
import Events from "./Events";
import TopContent from "./TopContent";
import "../index.css";

function Home() {
  return (
    <div className="home">
      <TopContent />
      <Events />
    </div>
  );
}

export default Home;
