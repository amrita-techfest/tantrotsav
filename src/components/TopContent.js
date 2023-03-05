import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HashLink as HLink } from "react-router-hash-link";

const TopContent = () => {
  return (
    <div className="hero " id="hero">
      <div className="intro z-50 flex justify-between items-center mt-[-70px] h-full w-full p-[140px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -400 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex-1"
        >
          <h1
            id="title"
            className="title-text text-[#0dff00] tracking-[3px] text-[60px] p-3 font-bold"
          >
            Tantrotsav'23
          </h1>
          <h1
            id="hero-p"
            className="hero-p p-3 text-[10px] mt-[-10px] text-white tracking-wide"
          >
            Welcome to Tantrotsav'23, the National Techfest of Amrita Vishwa
            Vidyapeetham, Chennai. We are glad to announce that Tantrotsav'23
            will be held from 26th to 27th March 2023. We invite you to be a
            part of this event and make it a grand success.
          </h1>
          <div className="btns">
            <HLink smooth to="#about">
              <button
                id="btn1"
                className="border-2 border-[#0dff00] transition duration-500 hover:bg-[#0dff00] hover:font-bold text-[16px] hover:text-black p-2 m-3 rounded-[5px] w-[130px]"
              >
                Explore
              </button>
            </HLink>
            <Link to="/register">
              <button
                id="btn2"
                className="border-2 border-[#0dff00] transition duration-500 hover:bg-transparent bg-[#0dff00] text-[16px]  hover:text-white font-bold hover:font-normal p-2 m-3 rounded-[5px] w-[130px]"
              >
                Register Now
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -400 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="svg-sec"
        >
          <img
            className="img-h"
            src="https://tri-nit.com/landing_page_vector.svg"
            alt="pic"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default TopContent;