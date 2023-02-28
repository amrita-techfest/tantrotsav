import React from "react";
import Example from "./components/Events";
import NavBar from "./components/Navbar";
import TopContent from "./components/TopContent";

function App() {
  return (
    <div className="App h-screen">
      <NavBar />
      {/* <Events /> */}
      <TopContent />
      {/* <Events /> */}
      <Example />
      
    </div>
  );
}

export default App;
