import React from "react";
import "../index.css";

function About() {
  return (
    <div className="about h-screen" id="about">
      <div className="about-h flex items-center justify-around">
        <div className="">
          <img
            className=" clg rounded-lg"
            src="https://dt19wmazj2dns.cloudfront.net/wp-content/uploads/2019/06/amrita-vishwa-vidyapeetham-chennaicampus-banner.jpg"
            alt="image"
          />
        </div>
        <div className="about-p text-white text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
          optio perspiciatis totam voluptate veniam doloremque, repellat
          numquam, obcaecati recusandae nihil consequuntur odio commodi esse cum
          nobis possimus fugit! Eveniet doloribus doloremque nostrum rem quae
          placeat harum maiores optio ratione officia!
        </div>
      </div>
    </div>
  );
}

export default About;
