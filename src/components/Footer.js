import React from "react";
import { HashLink } from "react-router-hash-link";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div class="container-fluid">
        <div className="box">
          <HashLink to="/#hero">
            <img src="./images/logo1.png " class="img-fluid"></img>
          </HashLink>
        </div>
        <div class="row">
          <div class="col-md-3">
            <HashLink smooth to="/#about">
              <h3>About Us</h3>
            </HashLink>
            <HashLink smooth to="https://amrita.edu/">
              <h3> Official website</h3>
            </HashLink>
            <HashLink to="/#faq" smooth>
              <h3>Queries</h3>
            </HashLink>
          </div>
          <div class="col-md-3">
            <h3>Contact</h3>
            <ul>
              <li>Phone: +91 9025313327</li>
              <li>Email: tantrotsav@ch.amrita.edu</li>
            </ul>
          </div>
          <div class="col-md-3">
            <h3 class="he">Reach US</h3>
            <ul>
              <li>
                <a href="https://goo.gl/maps/d6ZR6girFZMufFby6">
                  View on Google map
                </a>
              </li>
              <li>
                <a href="/register">Register for the event</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
