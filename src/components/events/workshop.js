import React from 'react';
import './workshop.css';
// import './index.css';


function workshop() {
  return (
    <div className='deatails'>
      <div className='image'>
        <img src='../assets/google.jpg' />
        <button className="border-2 border-[#ff00b3] text-white transition duration-500 hover:bg-[#ff00b3] text-[16px] p-2 m-3 rounded-[5px] w-[130px]">
            Register
          </button>
      </div>
      <div className='content-1'>
        <h1>Google cloud</h1>
        <p>Grow in-demand skills in emerging cloud technologies with experts from Google Cloud</p>
        <br></br>
        <p>INR 500</p>

       <div className='data'>
        <h2>Deatails</h2>
        <p>Name: Google cloud</p>
        <p>Date : 20/2/2023</p>
        <p>Duration and timing of the event : 2 days</p>
        <p>Venue: Class room</p>
        <p>Date of the preliminary event(Online mode only):gi</p>
        <br></br>
        <h2>Contact</h2>
        <p>Faculty coordinator</p>
        <p>Name :  Dr. Sophiya </p>
        <p>Email ID :Sophiya@gmail.com </p>
        <p>Phone no : 1234567890</p>
        <br></br>
        <p>Student coordinator</p>
        <p>Name :  Dr. Sophiya </p>
        <p>Email ID :Sophiya@gmail.com </p>
        <p>Phone no : 1234567890</p>
       </div>


        </div>
    </div>
  );
}

export default workshop;