import React from "react";
import Events from "./components/Events";
import NavBar from "./components/Navbar";
import TopContent from "./components/TopContent";

function App() {
  return (
    <div className="App h-screen">
      <NavBar />
      {/* <Events /> */}
      <TopContent />
    </div>
  );
}

export default App;
