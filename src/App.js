import React from "react";
import Events from "./components/Events";
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
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
