import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./eventDetails.css";
import { useLocation } from "react-router-dom";
// import getEventDetails from "../../../services/getEventDetails";
import { clearEventDetails, getEventDetailsStart } from "./actions";

function EventDetails({
  getEventDetailsStart,
  eventDetails,
  loading,
  clearEventDetails,
  eventId,
}) {
  const location = useLocation();
  const data = location.state?.data;

  useEffect(() => {
    getEventDetailsStart(eventId);

    return () => {
      clearEventDetails();
    };
  }, []);

  console.log(eventDetails);
  console.log(eventId);

  // console.log(data.team_size);

  return loading ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: 32,
        }}
      >
        Loading...
      </h1>
    </div>
  ) : (
    <div className='eventDetails h-[85vh]'>
      <div className='image'>
        <div className='p-4 flex-col flex justify-center items-center'>
          <img src={eventDetails.img} className='h-[350px] w-[350px]' />
          <button className='border-2 border-[#0dff00] text-white transition duration-500 bg-transparent hover:bg-[#0dff00] text-[16px] p-2 m-3 rounded-[5px] w-[130px]'>
            Register
          </button>
        </div>
      </div>
      <div className='p-3'>
        <h1 className='event_name p-2 text-[35px] tracking-[1px] text-white'>
          {eventDetails.name}
        </h1>
        {/* <p className='p-2 text-[20px] text-white'>Team Size : 1-2</p> */}
        <div>
          <h1 className='text-[30px] font-space text-white p-2 '>
            Mode:{eventDetails.mode}
          </h1>
          <p>Venue : {eventDetails.Venue}</p>
          <p>Timeing : {eventDetails.Time}</p>
          <p>Date : {eventDetails.Date}</p>
          <p>Duration : {eventDetails.Duration}</p>
          <h2>Registration Fee :{eventDetails.registrationFees}</h2>
        </div>
        <div>
          <p>
            <div className='p-2'>
              <h2 className='text-white text-[20px] underline py-2'>
                FaucltyCoordinator
              </h2>
              <p className="p-9">{eventDetails?.facultyCoordinator?.map(x => <div>
                  <div>
                  <li>
                    Name : {x.Name}</li></div>
                </div>)}</p>
                </div>
                </p>
          <p>
            <div className='p-2'>
              <h2 className='text-white text-[20px] underline py-2'>
                StudentCoordinator
                
                {/* {eventDetails.studentCoordinator.map(x => console.log(x))} */}

              </h2>
              <p className="p-9">{eventDetails?.studentCoordinator?.map(x => <div>
                  <div>
                  <li>
                    Name:{x.Name}</li></div>
                  <div><li>Deptment:{x.Dept}</li></div>
                  <div><li>
                    Year:{x.Year}
                    </li>
                    </div>
                  <div><li>
                    
                    Contact:{x.contact}
                    </li>
                    </div>
                  <br></br>
                </div>)}</p>
                <h1 className='text-[30px] font-space text-white p-2 '>
                Description
          </h1>
              <p className='text-white text-[16px] py-2 w-50'>
               {eventDetails.description}
              </p>
              <h1 className='text-[30px] font-space text-white p-2  '>
          Rules
          </h1>
          <p className="w-50">{eventDetails.rules}</p>
              {/* <ul className='list-disc text-white px-5'>
                <li>
                  The event will be about creating a map for 3rd-first/third
                  person game.
                </li>
                <li>Assets will be given to the respected teams.</li>
                <li>
                  It is just a drag & drop concept on the game development
                  platform called Unity.
                </li>
              </ul> */}
            </div>
            {/* <div className='p-2'>
              <h2 className='text-white text-[20px] underline py-2'>
                Event-2 : Character Creation
              </h2>
              <h4 className='text-white text-[16px] py-2'>
                23/03/23: 1.00 pm to 5.00pm
              </h4>
              <ul className='list-disc text-white px-5'>
                <li>
                  This event will be about creating a 3D character on the
                  platform called blender.
                </li>
                <li>
                  Blender is a beginner tool for creations of characters, game
                  assets, etc..
                </li>
              </ul>
            </div> */}
          </p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  eventDetails: state.eventDetails.eventDetails,
  loading: state.eventDetails.isFetching,
  eventId: state.eventSetter.eventId,
});

const mapDispatchToProps = dispatch => ({
  getEventDetailsStart: eventId => dispatch(getEventDetailsStart(eventId)),
  clearEventDetails: () => dispatch(clearEventDetails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
