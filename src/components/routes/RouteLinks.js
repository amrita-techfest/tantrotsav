import { Route, Routes } from "react-router-dom";
// import Main from "../events/main.js"
import EventsIndex from "../events/index/index.js";
import Home from "../Home";
// import Register from "../auth/register.js"
// import EventsIndex from "../events/index/index.js";
import Register from "../auth/register.js"


import Footer from "../Footer";
import Dashboard from "../user/dashboard.js";

import React from "react";

const RouteLinks = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsIndex />} />
        <Route path="/register" element={<Register />} />

      <Route path="/Footer" element={<Footer />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default RouteLinks;