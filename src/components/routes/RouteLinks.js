import { Route, Routes } from "react-router-dom";
import EventsIndex from "../events/index/index.js";
import Home from "../Home";
import Footer from "../Footer";
import Register from "../auth/register.js";
import Game from "../Game.js";
// import EventsIndex from "../events/index/index.js";

import Dashboard from "../user/dashboard.js";
import RegistedEvents from "../user/eventcard.js";
import Profile from "../user/profile.js";
import ParticleBackground from "../ParticleBackground";

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
      <Route path="/Game" element={<Game />} />
      <Route path="/ParticleBackground" element={<ParticleBackground />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/registedEvents" element={<RegistedEvents />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default RouteLinks;
