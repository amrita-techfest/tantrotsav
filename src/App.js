import React from "react";
import NavBar from "./components/Navbar";
import RouteLinks from "./components/routes/RouteLinks";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import ParticleBackground from "./components/ParticleBackground";

// import Home from "./components/Home";

function App() {
  return (
    <div className="App  scrollbar" id="scrollbar5">
      <ParticleBackground />
      <Router>
        <NavBar />
        <RouteLinks />
      </Router>
    </div>
  );
}

export default App;
