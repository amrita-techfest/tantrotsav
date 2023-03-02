import { Route, Routes } from "react-router-dom";
import EventsIndex from "../events/index/index.js";
import Home from "../Home";
import Footer from "../Footer";
import Register from "../auth/register.js"
// import EventsIndex from "../events/index/index.js";


import Dashboard from "../user/dashboard.js";

import React from "react";
import EventDetails from "../events/eventDetails/eventDetails.js";


const RouteLinks = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsIndex />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/events/details" element={<EventDetails />} />

      <Route path="/Footer" element={<Footer />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default RouteLinks;
