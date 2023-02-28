import React from "react";
import Example from "./components/Events";
import NavBar from "./components/Navbar";
import Particle from "./components/Particle";
import TopContent from "./components/TopContent";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App scrollbar" id="scrollbar5">
      <NavBar />
      {/* <Events /> */}
      <TopContent />
      <Events />
    </div>
  );
}

export default App;
