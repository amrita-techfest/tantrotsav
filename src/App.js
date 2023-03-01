import React from "react";
import Events from "./components/Events";
import NavBar from "./components/Navbar";
import RouteLinks from "./components/routes/RouteLinks";

import TopContent from "./components/TopContent";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./components/Home";

function App() {
  return (
    <div className="App scrollbar" id="scrollbar5">
      <Router>
        <NavBar />
        {/* <Events /> */}
        <RouteLinks />

      </Router>
</div>
  );
}

export default App;
