import { width } from '@mui/system';
import React from 'react';
import './eventDetails.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function EventDetails() {
  const location = useLocation();
  const data = location.state?.data;

  console.log(data.team_size)

  return (
    <div className='details'>
      <div className='image'>
        <img src='../assets/google.jpg' className='event-image'/>
        <button className="border-2 border-[#ff00b3] text-white transition duration-500 hover:bg-[#ff00b3] text-[16px] p-2 m-3 rounded-[5px] w-[130px]">
            Register
        </button>
      </div>
      <div className='p-3'>
          <h1 className='p-2 text-[30px] tracking-[1px] text-center text-[#0dff00]'>{data.name}</h1>
          <p className='p-2 text-[20px] text-white'>Team Size - {data.team_size}</p>
      </div>
    </div>
  );
}

export default EventDetails;