import React, { useState } from "react";
import NavBar from "./components/Navbar";
import RouteLinks from "./components/routes/RouteLinks";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import ParticleBackground from "./components/ParticleBackground";
import { auth } from "./firebase";
// import Home from "./components/Home";

// require('dotenv').config();

function detectMob() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}

const MobileView = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        color: "#000",
      }}
    >
      <p style={{ textAlign: "center" }}>
        Please view this website on a desktop or laptop.
      </p>
      <p style={{ textAlign: "center" }}>
        This website is not optimized for mobile devices.
      </p>
    </div>
  );
};

function App() {
  const [isOpen, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <>
      <div className="App  scrollbar" id="scrollbar5">
        <Router>
          <NavBar
            isOpen={isOpen}
            user={user}
            setUser={setUser}
            setOpen={setOpen}
          />
          {!isOpen && (
            <RouteLinks isOpen={isOpen} user={user} setUser={setUser} />
          )}
          {/* <h1 className="text-center text-2xl font-bold mt-56">
            Registration Will Begin At 8PM Today!
          </h1> */}
        </Router>
      </div>{" "}
    </>
  );
}

export default App;
