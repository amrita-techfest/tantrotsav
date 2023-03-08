import { Route, Routes } from "react-router-dom";
import EventsIndex from "../events/index/index.js";
import Home from "../Home";
import Footer from "../Footer";
import Dashboard from "../user/dashboard.js";
import RegistedEvents from "../user/eventcard.js";
import Profile from "../user/profile.js";
// import ParticleBackground from "../ParticleBackground";
import RegisterEvent from "../auth/registerEvent.js";
import React from "react";
import EventDetails from "../events/eventDetails/eventDetails.js";
import SignIn from "../auth/signin.js";

const RouteLinks = ({ isOpen }) => {
  return (
    <Routes>
      <Route path="/" element={<Home isOpen={isOpen} />} />
      <Route path="/events" element={<EventsIndex />} />
      <Route path="/register" element={<RegisterEvent />} />
      <Route path="/events/:details" element={<EventDetails />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/registedEvents" element={<RegistedEvents />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export default RouteLinks;
