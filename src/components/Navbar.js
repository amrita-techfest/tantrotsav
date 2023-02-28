import Hamburger from "hamburger-react";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const links = [
    "Home",
    "About",
    "Events",
    "Prizes & Opportunities",
    "Sponsors",
    "FAQ",
    "Contact",
  ];
  return (
    <>
      <div className="sticky top-0 z-50 flex items-center justify-between p-5 pb-3 pt-3 backdrop-filter backdrop-blur-lg bg-opacity-30 border-gray-200">
        <h1 className=" text-white font-bold text-[35px]">TechFest</h1>
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
        <div className="hidden  md:block">
          <ul className="flex items-center justify-between space-x-10 text-white text-[18px]">
            {links.map((link) => (
              <li className="font-bold cursor-pointer transition duration-500 hover:text-[#f51bbb] ">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
