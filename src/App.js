import React, { useState } from "react";
import NavBar from "./components/Navbar";
import RouteLinks from "./components/routes/RouteLinks";

import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
// import Home from "./components/Home";

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="App  scrollbar" id="scrollbar5">
      <Router>
        <NavBar isOpen={isOpen} setOpen={setOpen} />
        <RouteLinks isOpen={isOpen} />
        <Footer isOpen={isOpen} />
      </Router>
    </div>
  );
}

export default App;
