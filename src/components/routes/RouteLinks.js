import { Route, Routes } from "react-router-dom";
// import Main from "../events/main.js"
import EventsIndex from "../events/index/index.js";
import Home from "../Home"
// import Register from "../auth/register.js"
import EventsIndex from "../events/index/index.js";
import Home from "../Home";

import React from "react";

const RouteLinks = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsIndex />} />
    </Routes>
  );
};

export default RouteLinks;
