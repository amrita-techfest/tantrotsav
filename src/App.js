import "./index.css";
import { ReactComponent as WorkIcon } from "./components/work.svg";
import { ReactComponent as SchoolIcon } from "./components/school.svg";

import timelineElements from "./components/timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import React, { useState } from "react";
import NavBar from "./components/Navbar";
import RouteLinks from "./components/routes/RouteLinks";

import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Timeline from "./components/timeline"


function App() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };
  const [isOpen, setOpen] = useState(false);


  return (

      <div className="App  scrollbar" id="scrollbar5">
      <Router>
        <NavBar isOpen={isOpen} setOpen={setOpen} />
        <RouteLinks isOpen={isOpen} />
        <Footer isOpen={isOpen} />
      </Router>
      <h1 className="title">Timeline</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default App;

