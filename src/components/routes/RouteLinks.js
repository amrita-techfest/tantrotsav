import { Route, Routes } from "react-router-dom";
// import Main from "../events/main.js"
import EventsIndex from "../events/index/index.js";
import Home from "../Home";
// import Register from "../auth/register.js"
// import EventsIndex from "../events/index/index.js";
import Register from "../auth/register.js";
import timeline from "../timeline.js";
import Footer from "../Footer";
import Game from "../Game";
import React from "react";

const RouteLinks = ({ isOpen }) => {
  return (
    <Routes>
      <Route path="/" element={<Home isOpen={isOpen} />} />
      <Route path="/events" element={<EventsIndex />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/Game" element={<Game />} />
      <Route path="/timeline" element={<timeline />} />
    </Routes>
  );
};

export default RouteLinks;
