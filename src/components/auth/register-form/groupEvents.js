import React from "react";
import { connect } from "react-redux";
import "./styles.css";
import { addTeamEvents, fetchEventsListStart } from "./redux/actions";
import { MultiSelect } from "react-multi-select-component";

const GroupEvents = ({
  eventsList,
  getEventsList,
  loading,
  nextStep,
  prevStep,
  addEvents,
}) => {
  const [selectedEvents, setSelectedEvents] = React.useState([]);

  React.useEffect(() => {
    getEventsList();
  }, []);

  const goNext = () => {
    if (selectedEvents.length > 0) {
      let events = [];
      selectedEvents.forEach(event => {
        const eventObj = {
          eventName: event.value.eventName,
          eventFee: event.value.registrationFees,
        };
        events.push(eventObj);
      });
      addEvents(events);
    }
    nextStep();
  };

  const events_list = eventsList => {
    const detailsArray = [];
    for (const key in eventsList) {
      if (eventsList[key].maxTeamSize > 1) {
        detailsArray.push({
          label: eventsList[key].eventName,
          value: eventsList[key],
        });
      }
    }
    return detailsArray;
  };

  return (
    <div className='parent-content'>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px",
        }}
      >
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <h2
              style={{
                color: "#fff",
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "10px",
                width: "100%",
              }}
            >
              Please select the <strong>Group</strong> events you want to
              participate in.
            </h2>
            <div
              style={{
                color: "#333",
                width: "80%",
              }}
            >
              <MultiSelect
                options={events_list(eventsList)}
                value={selectedEvents}
                onChange={setSelectedEvents}
                labelledBy={"Select"}
              />
            </div>
            <div className='buttons mt-4'>
              <button
                onClick={prevStep}
                className=' border-2 border-[#0dff00] transition duration-500 hover:bg-[#0dff00] hover:font-bold text-[16px] hover:text-black p-2 rounded-[5px] w-[130px] mx-3'
              >
                Previous
              </button>
              <button
                onClick={goNext}
                className='border-2 border-[#0dff00] transition duration-500 hover:bg-[#0dff00] hover:font-bold text-[16px] hover:text-black p-2 rounded-[5px] w-[130px] mx-3'
              >
                Go Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  eventsList: state.eventLists.eventsList,
  loading: state.eventLists.isFetching,
});

const mapDispatchToProps = dispatch => ({
  getEventsList: () => dispatch(fetchEventsListStart()),
  addEvents: events => dispatch(addTeamEvents(events)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupEvents);
