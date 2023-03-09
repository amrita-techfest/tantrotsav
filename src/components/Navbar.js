import Hamburger from "hamburger-react";
import React from "react";
import "../index.css";
import { motion } from "framer-motion";
import { HashLink as HLink } from "react-router-hash-link";
import { registerWithGoogle } from "../../src/services/registerWithGoogle";
import { auth } from "../firebase";
import Avatar from "@mui/material/Avatar";

function Navbar({ isOpen, setOpen }) {
  const links = [
    ["Home", "/"],
    ["About", "/#about"],
    ["Events", "/events"],
    ["FAQ", "/#faq"],
    ["Contact", "#contact"],
  ];
  const [userStatus, setUserStatus] = React.useState(false);
  const user = auth.currentUser;

  React.useEffect(() => {
    if (user) {
      setUserStatus(true);
    } else {
      setUserStatus(false);
    }
  }, [user]);

  const handleLogin = () => {
    registerWithGoogle();
  };

  const [openDropDown, setOpenDropDown] = React.useState(false);

  return (
    <>
      <div
        id="naving"
        className="mob relative z-[5000000000000] flex items-center justify-between p-5 pb-3 pt-3 backdrop-filter backdrop-blur-lg bg-opacity-30 border-gray-200 bg-transparent"
      >
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -400 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="flex">
              <img
                className="logo h-20"
                id="logo"
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
              {/* {links.map((link, key) => (
                <li
                  key={key}
                  id="lin"
                  className="font-bold cursor-pointer transition duration-500 "
                >
                  <HLink
                    smooth
                    to={link[1]}
                    onClick={
                      
                        link[1] == '/events'
                      ? setOpenDropDown(!openDropDown)
                      : () => {
                      setOpen(false);
                    }}
                  >
                    {link[0]}
                  </HLink>
                </li>
              ))} */}
              <li className="font-bold cursor-pointer transition duration-500 ">
                <HLink smooth to="/">
                  Home
                </HLink>
              </li>
              <li className="font-bold cursor-pointer transition duration-500 ">
                <HLink smooth to="/#about">
                  About
                </HLink>
              </li>
              <li
                onClick={() => setOpenDropDown(!openDropDown)}
                className="font-bold cursor-pointer transition duration-500"
              >
                Events
              </li>
              <li>
                <HLink smooth to="/#faq">
                  FAQ
                </HLink>
              </li>
              <li>
                <HLink smooth to="/#contact">
                  Contact
                </HLink>
              </li>
            </ul>

            {openDropDown && (
              <div class="dropdown">
                <ul>
                  <li>Option 1</li>
                  <li>Option 2</li>
                  <li>Option 3</li>
                  <li>Option 4</li>
                </ul>
              </div>
            )}
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -400 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="hidden  md:block"
        >
          <ul className="flex items-center justify-between space-x-10 text-white text-[18px]">
            {links.map((link, key) => (
              <li
                key={key}
                id="lin"
                className="font-bold cursor-pointer transition duration-500 hover:font-bold"
              >
                <HLink className="hlink" smooth to={link[1]}>
                  {link[0]}
                </HLink>
              </li>
            ))}
            {!userStatus ? (
              <button
                id="btn1"
                onClick={() => {
                  handleLogin();
                }}
                className=" border-2 border-[#0dff00] transition duration-500 hover:bg-[#0dff00] hover:font-bold text-[16px] hover:text-black p-2 rounded-[5px] w-[130px]"
              >
                Login
              </button>
            ) : (
              <Avatar alt="dp" src={user.photoURL} />
            )}
          </ul>
        </motion.div>
      </div>
    </>
  );
}

export default Navbar;
