import React from 'react';
// import Workshop from "./workshop.js"
import './main.css';
import { event } from '../../../data/data';

function EventsIndex() {
    return (
      <div className="main1">
          
            {
                event.map((det) => {
                    return (
                        <>
                            <div className='container12'>
                                {det.gameDetails.map(
                                    (details) => {
                                        console.log(details.length)
                                        return (
                                            <div className='card'>
                                            {/* <div className='lines'></div> */}
                                                <div className='imgBox'>
                                                {/* <img src='images/technical.jpg' alt='tech photo' /> */}
                                                </div>
                                                <div className='content'>
                                                    <div className='details'>
                                                        <h2>{details.name}</h2>
                                                        <h3>{details.about}</h3>
                                                        <p>Mode - {details.mode}</p>
                                                        <a href='/'>
                                                            <button className='bg-[blue] text-white p-3 rounded-[5px] m-3'>
                                                                Read More
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div> 
                                        );
                                    }
                                )}
                            </div>
                        </>
                    );
                })
            }
            
          </div>
    );
  }

export default EventsIndex;
