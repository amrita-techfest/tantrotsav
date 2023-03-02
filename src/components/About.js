import React from "react";
import "../index.css";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="about h-screen" id="about">
      <motion.h1
        initial={{ opacity: 0, scale: 0.5, y: -400 }}
        transition={{ duration: 1.2 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className=" text-center font-bold text-white text-[40px]"
      >
        ABOUT US
      </motion.h1>
      <div id="about-h" className="about-h flex items-center justify-around">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: -600 }}
          transition={{ duration: 1.2 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          className=""
        >
          <img
            id="clg"
            className=" clg rounded-lg"
            src="https://dt19wmazj2dns.cloudfront.net/wp-content/uploads/2019/06/amrita-vishwa-vidyapeetham-chennaicampus-banner.jpg"
            alt="image"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: 100 }}
          transition={{ duration: 1.2 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          className="about-p text-white text-justify"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
          optio perspiciatis totam voluptate veniam doloremque, repellat
          numquam, obcaecati recusandae nihil consequuntur odio commodi esse cum
          nobis possimus fugit! Eveniet doloribus doloremque nostrum rem quae
          placeat harum maiores optio ratione officia!
        </motion.div>
      </div>
    </div>
  );
}

export default About;