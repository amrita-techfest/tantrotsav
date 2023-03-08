import "./App.css";
import { ReactComponent as EventIcon } from "./event.svg";
import { ReactComponent as WorkshopIcon } from "./workshop.svg";

import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  let eventIconStyles = { background: "rgb(26, 247, 158)" };
  let workshopIconStyles = { background: "rgb(255, 174, 0)" };

  return (
    <div>
      <h1 className="title">Timeline</h1>
      <br />
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isEventIcon = element.icon === "event";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              contentStyle={{
                background: "#000",
                color: "azure",
                opacity: 1,
              }}
              contentArrowStyle={{
                borderRight: "7px solid white",
              }}
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isEventIcon ? eventIconStyles : workshopIconStyles}
              icon={isEventIcon ? <EventIcon /> : <WorkshopIcon />}
            >
              <div className="vertical-timeline-element-content-box">
                <h3 className="vertical-timeline-element-title text-[#fff] text-justify font-bold sm:text-[20px] text-[25px]">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description">{element.description}</p>
                {showButton && (
                  <a
                    className={`button ${
                      isEventIcon ? "eventButton" : "workshopButton"
                    }`}
                    href="/events"
                  >
                    {element.buttonText}
                  </a>
                )}
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <br />
      <br />
    </div>
  );
}

export default Timeline;
