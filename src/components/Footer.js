import React from 'react';
 import './Footer.css'
const Footer =() =>{
    return(
        <footer>
        <div class="container">
        <div className='box'><img src ="./images/logo.jpg " class="imgs"></img></div>
            <div class="row">
                <div class="col-md-4">
                    <a href='#'><h3>About Us</h3></a>
                    <a href="#"><h3> Official website</h3></a>
                    <a href='#'><h3>Queries</h3></a>
                </div>
                <div class="col-md-4">
                    <h3>Contact</h3>
                    <ul>
                        <li>Phone: 555-555-5555</li>
                        <li>Email: info@example.com</li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h3 class ="he">Follow Us</h3>
                    <ul class="social-icons">
                        <li><div class ="hel"><a href="#"><span class="fa fa-facebook"></span></a></div></li>
                        <li><div class ="hel"><a href="#"><span class="fa fa-twitter"></span></a></div></li>
                        <li><div class ="hel"><a href="#"><span class="fa fa-linkedin"></span></a></div></li>
                        <li><div class ="hel"><a href="#"><span class="fa fa-google-plus"></span></a></div></li>
                        <li><div class ="hel"><a href="#"><span class="fa fa-instagram"></span></a></div></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

    );

}

export default Footer;