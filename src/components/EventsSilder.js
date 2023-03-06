import React from "react";
import Tilt from "react-tilt";
import { HashLink as HLink } from "react-router-hash-link";

const Card = ({ title }) => {
  return (
    <Tilt className="bg-tertiary  border-[1px] border-[green-pink-gradient]  shadow-card rounded-[5px] h-[500px] w-[300px]">
      <div className="w-full p-[20px]">
        <h1 className="text-center text-white font-bold text-[40px]">
          {title}
        </h1>
        <div className="mt-10">
          <h1 className="text-white font-bold text-center text-[30px]">LOGO</h1>
          <p className=" text-white text-justify mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            debitis maxime ea error ipsa quos nihil voluptatum aperiam obcaecati
            ratione.
          </p>
          <div className="flex justify-center items-center mt-4">
            <HLink smooth to="/events">
              <button className="button-49" role="button">
                View More
              </button>
            </HLink>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

function EventsSilder() {
  return (
    <div id="event" className="w-full bg-black h-screen">
      <div className="max-w-7xl mx-auto sm:p-[50px] p-[30px]" id="about">
        <h1 className="text-white font-bold sm:text-[50px] text-[40px] text-center">
          EVENTS
        </h1>
        <div className=" flex gap-5 flex-wrap justify-center mt-24">
          <Card title="C20" />
          <Card title="ASE" />
          <Card title="ASC" />
        </div>
      </div>
    </div>
  );
}

export default EventsSilder;
