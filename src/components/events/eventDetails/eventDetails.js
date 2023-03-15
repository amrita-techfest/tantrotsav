import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./eventDetails.css";
import { useLocation, useNavigate } from "react-router-dom";
// import getEventDetails from "../../../services/getEventDetails";
import { clearEventDetails, getEventDetailsStart } from "./actions";
import { HashLink } from "react-router-hash-link";
import moment from "moment";
 

function EventDetails({
  getEventDetailsStart,
  eventDetails,
  loading,
  clearEventDetails,
  // eventId,
}) {
  const location = useLocation();
  const data = location.state?.data;

  const [eventId, setEventId] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const pathname = window.location.pathname;
    const eventId = atob(pathname.split("/").pop()); // get the last part of the pathname
    setEventId(eventId);
    getEventDetailsStart(eventId);
    return () => {
      clearEventDetails();
    };
  }, []);

  console.log("eventDetails" , eventDetails);
  console.log("eventId", eventId);

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
        <div class='wrapper'>
          <div class='circle'></div>
          <div class='circle'></div>
          <div class='circle'></div>
          <div class='shadow'></div>
          <div class='shadow'></div>
          <div class='shadow'></div>
        </div>
      </h1>
    </div>
  ) : eventDetails ? (
    <div className='max-w-7xl mx-auto h-auto md:h-screen'>
      <div className='eventDe p-[120px] pt-[50px] flex items-center justify-between'>
        <div className='img-con flex self-start flex-col gap-4'>
          <img
            src={eventDetails.img ? eventDetails.img : "" }
            alt='ima'
            className='h-[250px] w-[250px]'
          />
          {moment().format("YYYY-MM-DD, h:mm:ss a") <
          "2023-04-02, 5:00:00 pm" ? (
            <>
            <button
              className='reg ml-4'
              onClick={() => alert("Registration will start soon. Stay tuned!")}
            >
              Register Now
            </button>

            {eventDetails?.prizeMoney?.length > 0 ? 
            <div className="">
            <div>
              <h1 class="event_name pt-10 pb-0 p-08 text-[30px] tracking-[5px] font-bold text-white">Prizes</h1>
                <div>
                  <div className="ve flex flex-col gap-3 p-05 pt-0 mt-4 text-[15px] font-medium pb-0">
                {eventDetails?.prizeMoney?.map((x) => (

                    <h2><li>{x.prize}</li></h2> 
                ))}
                </div>
                </div>
            </div>
            </div>
                : null}
            </>
          ) : (
            <HashLink to='/register'>
              <button className='reg'>Register Now</button>
            </HashLink>
          )}
        </div>
        <div id='in' className='in h-auto ml-10 w-[800px]'>
          <h1 className='event_name pt-0 pb-0 p-10 text-[35px] tracking-[1px] font-bold text-white'>
            {eventDetails.name}
          </h1>
          <h1 className='mo text-[30px] pt-0 mt-4 pb-0 font-space p-10'>
            Mode: Offline
          </h1>
          <div className=" ve flex flex-col gap-3 p-10 pt-0 mt-4 text-[18px] font-medium pb-0">
            <p>Event Date : {eventDetails.date}</p>
            <p>Event Time : {eventDetails.time}</p>
            <p>Venue : {eventDetails.venue}</p>
            {eventDetails.duration ? <p>Duration : {eventDetails.duration}</p> : null } 
            <h2>Registration Fee : {eventDetails.registrationFees}</h2>
            
            {eventDetails.content ? (
              <div className="">
                <h2 className="text-[#09ff00] text-[20px] underline py-2">
                  About C20
                </h2>
                <p className="p-3">{eventDetails?.content}</p>
              </div>
            ) : null}

          {eventDetails.themes?.length > 0 ? (
             <div className="">
             <h2 className="text-[#09ff00] text-[20px] underline py-2">
               C20 Themes
             </h2>
             <p className="p-3">
               {eventDetails?.themes?.map((x) => (
                 <div>
                   <div>
                     <li>{x.theme}</li>
                   </div>
                 </div>
               ))}
             </p>
           </div>
          ) : null}
         


            <div className="">
              <h2 className="text-[#09ff00] text-[20px] underline py-2">
                Description
              </h2>
              <p className="p-3">
                {eventDetails?.description?.map((x) => (
                  <div>
                    <div>
                      <li>{x.point}</li>
                    </div>
                  </div>
                ))}
              </p>
            </div>

            <div className="">
            <h2 className="text-[#09ff00] text-[20px] underline py-2">
               Rules
             </h2>

              <p className="p-3">
                {eventDetails?.rules?.map((x) => (
                  <div>
                    <div>
                      <li>{x.rule}</li>
                    </div>
                  </div>
                ))}
              </p>
            </div>

            {eventDetails.judging ? (
              <div className="">
            <h2 className="text-[#09ff00] text-[20px] underline py-2">
               Judging Criteria
             </h2>

              <p className="p-3">
                {eventDetails?.judging?.map((x) => (
                  <div>
                    <div>
                      <li>{x.criteria}</li>
                    </div>
                  </div>
                ))}
              </p>
            </div>
            ) : null}
            

            {/* <div className="">
            <h2 className="text-[#09ff00] text-[20px] underline py-2">
            Prizes
             </h2>

              <p className="p-3">
                {eventDetails?.prizeMoney?.map((x) => (
                  <div>
                    <div>
                      <li>{x.prize}</li>
                    </div>
                  </div>
                ))}
              </p>
            </div> */}
            

            <div className=''>
              <h2 className='text-[#09ff00] text-[20px] underline py-2'>
                Faculty Coordinator
              </h2>
              <p className='p-3'>
                {eventDetails?.facultyCoordinator?.map(x => (
                  <div>
                    <div>
                      <li>Name : {x.Name}</li>
                    </div>
                  </div>
                ))}
              </p>
            </div>

            <h2 className='text-[#09ff00] text-[20px] underline py-2'>
              Student Coordinator
            </h2>
            <div className='p-3'>
              <div className='st flex gap-5'>
                {eventDetails?.studentCoordinator?.map(x => (
                  <div className=''>
                    <div className=''>
                      <p>Name : {x.Name}</p>
                      <p>Department: {x.Dept}</p>
                      <p>Year: {x.Year}</p>
                      <p>Contact: {x.contact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  ) : (
    // navigate("/events")
    null
  );
}

const mapStateToProps = (state) => (
  {
  eventDetails: state.eventDetails.eventDetails,
  loading: state.eventDetails.isFetching,
  eventId: state.eventSetter.eventId,
});

const mapDispatchToProps = dispatch => ({
  getEventDetailsStart: eventId => dispatch(getEventDetailsStart(eventId)),
  clearEventDetails: () => dispatch(clearEventDetails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
