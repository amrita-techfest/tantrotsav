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

  return (
    <div className='details'>
      <div className='image'>
        <img src='../assets/google.jpg'/>
        <button className="border-2 border-[#ff00b3] text-white transition duration-500 hover:bg-[#ff00b3] text-[16px] p-2 m-3 rounded-[5px] w-[130px]">
            Register
        </button>
      </div>
      <Card sx={{maxWidth:600}}>
        <CardActionArea>
          <CardContent>
              <div className='content-1'>
                <h1 className='text-[20px] font-bold text-center p-4'>{data.name}</h1>
                  <div className='data'>
                    
                  </div>
              </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default EventDetails;