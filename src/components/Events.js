import React from "react";
<<<<<<< HEAD
import { events } from "../data/data";
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { cardContents } from "../data/data";
import Card from "./cards/Card";
// import './events.css';

function Events() {
  return (
    <div>
      <h1 className="heading text-white text-[38px] text-center p-[15px]">Events</h1>
      <div className="w-[90%] flex mx-auto justify-center items-center">
        {cardContents.map((cardCon) => {
          return (
            // <Card 
            // className="m-3 backdrop-blur-lg bg-opacity-30 backdrop-filter ">
            //   <CardMedia
            //     sx={{ height: 200 }}
            //     image="images/tech.png"
            //     title={cardCon.dept}
            //   />
            //   <CardContent>
            //       <Typography gutterBottom variant="h5" component="div">
            //         {cardCon.dept}
            //       </Typography>
            //       <Typography variant="body2" color="text.secondary">
            //         {cardCon.description}
            //       </Typography>
            //   </CardContent>
            //   <div className="flex justify-center items-center m-3">
            //     <button className="bg-[blue] p-2 m-auto rounded-[5px] text-white hover:bg-black">
            //         <a href={cardCon.link} className="text-center">Explore</a>
            //     </button>
            //   </div>
            // </Card>
            <Card />
          );
        })}
      </div>
    </div>
=======

function Events() {
  return (
    <>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
      <h1>ifeieiohi</h1>
    </>
>>>>>>> 0853cb5088c1d253cf97f401628cd3cf984dc7d9
  );
}

export default Events;
