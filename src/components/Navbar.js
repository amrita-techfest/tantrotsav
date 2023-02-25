import Hamburger from "hamburger-react";
import React, { useRef, useState } from "react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className=" flex items-center justify-between p-5">
        <h1 className=" text-white text-[35px]">Logo</h1>
        <div className="md:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={30}
            color="#03C988"
            label="Show menu"
            onToggle={(toggled) => {
              if (toggled) {
                // open a menu
              } else {
                // close a menu
              }
            }}
          />
        </div>
        <div className=" hidden md:block">
          <ul className="flex items-center justify-between space-x-10 text-white text-[16px]">
            <li className=" cursor-pointer">Home</li>
            <li className=" cursor-pointer">Events</li>
            <li className=" cursor-pointer">Blog</li>
            <li className=" cursor-pointer">Gallery</li>
            <li className=" cursor-pointer">Contact</li>
          </ul>
        </div>
        <div className="hidden md:block">
          <button className="bg-[#03C988] text-white px-5 py-2 rounded-md">
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
