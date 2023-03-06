import { width } from "@mui/system";
import React, { useEffect } from "react";
import "./eventDetails.css";
import { useLocation } from "react-router-dom";
import getEventDetails from "../../../services/getEventDetails";

function EventDetails() {
  const location = useLocation();
  const data = location.state?.data;

  useEffect(() => {
    getEventDetails("event1");
  }, []);

  console.log(data.team_size);

  return (
    <div className='eventDetails h-[85vh]'>
      <div className='image'>
        <div className='p-4 flex-col flex justify-center items-center'>
          <img src='../assets/google.jpg' className='h-[350px] w-[350px]' />
          <button className='border-2 border-[#0dff00] text-white transition duration-500 bg-transparent hover:bg-[#0dff00] text-[16px] p-2 m-3 rounded-[5px] w-[130px]'>
            Register
          </button>
        </div>
      </div>
      <div className='p-3'>
        <h1 className='event_name p-2 text-[35px] tracking-[1px] text-white'>
          {data.name}
        </h1>
        <p className='p-2 text-[20px] text-white'>Team Size : 1-2</p>
        <div>
          <h1 className='text-[30px] font-space text-white p-2 '>
            Event Description
          </h1>
          <p>
            <div className='p-2'>
              <h2 className='text-white text-[20px] underline py-2'>
                Event-1 : Map Creation
              </h2>
              <p className='text-white text-[16px] py-2'>
                Timing : 23/03/23: 8.00 am to 12.00pm
              </p>
              <ul className='list-disc text-white px-5'>
                <li>
                  The event will be about creating a map for 3rd-first/third
                  person game.
                </li>
                <li>Assets will be given to the respected teams.</li>
                <li>
                  It is just a drag & drop concept on the game development
                  platform called Unity.
                </li>
              </ul>
            </div>
            <div className='p-2'>
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
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
