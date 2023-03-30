import React from "react";
import TopContent from "./TopContent";
import "../index.css";
import About from "./About";
import Footer from "./Footer";
import EventsSilder from "./EventsSilder";
import Faq from "../Faq";
import Timeline from "./timeline";
import Sponsors from "./sponsors";

function Home({ isOpen, setUser, user }) {
  return (
    <div className="home h-auto sm:h-screen">
      <TopContent isOpen={isOpen} setUser={setUser} user={user} />
      {/* <EventsSilder /> */}
      {/* <About /> */}
      {/* <Sponsors /> */}
      {/* <Timeline /> */}
      <Footer />
    </div>
  );
}

export default Home;
