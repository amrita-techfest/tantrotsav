import Hamburger from "hamburger-react";
import React, { useState } from "react";
import "../index.css";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const links = [
    "Home",
    "About",
    "Events",
    "Prizes & Opportunities",
    "FAQ",
    "Contact",
  ];
  return (
    <>
      <div className="sticky top-0 z-50 flex items-center justify-between p-5 pb-3 pt-3 backdrop-filter backdrop-blur-lg bg-opacity-30 border-gray-200 bg-transparent">
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -400 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="flex">
              <img
                className="h-20 logo"
                src="https://dt19wmazj2dns.cloudfront.net/wp-content/uploads/2023/01/amrita-c20-logo-white.svg"
                alt="logo"
              />
            </div>
          </motion.div>
        )}
        <div className="md:hidden hum">
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

        {isOpen && (
          <div className="mob-nav">
            <ul className="flex flex-col items-center justify-center space-y-10 text-white text-[18px]">
              {links.map((link) => (
                <li className="font-bold cursor-pointer transition duration-500 hover:text-[#0dff00] ">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -400 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="hidden  md:block"
        >
          <ul className="flex items-center justify-between space-x-10 text-white text-[18px]">
            {links.map((link) => (
              <li className="font-bold cursor-pointer transition duration-500 hover:text-[#0dff00] hover:font-bold">
                {link}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </>
  );
}

export default Navbar;
