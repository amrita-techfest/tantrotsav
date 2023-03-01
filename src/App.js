import React from "react";
import Events from "./components/Events";
import NavBar from "./components/Navbar";
import TopContent from "./components/TopContent";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App h-screen">
      <NavBar />
      {/* <Events /> */}
      <TopContent />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
