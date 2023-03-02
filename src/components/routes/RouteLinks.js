import { Route, Routes } from "react-router-dom";
import EventsIndex from "../events/index/index.js";
import Home from "../Home";
import EventDetails from "../events/eventDetails/eventDetails.js";

import React from "react";

const RouteLinks = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsIndex />} />
        <Route path='/event-details/:name' element={<EventDetails />} />
    </Routes>
  );
};

export default RouteLinks;
