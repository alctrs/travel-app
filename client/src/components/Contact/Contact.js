import React, { Component } from "react";
import"./Contact.css";

const Contact = () => (

    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">

            <h2 className="section-heading animated shake">Let's Stay In Touch!</h2>
            <hr className="my-4" />
            <p className="mb-5 contactMe">FOLLOW US: </p>
            <a href="" target="blank"> <img class="social-media" src="/images/twitter.jpg" alt="twitter"/></a>
            <a href="" target="blank"> <img class="social-media" src="/images/insta.jpg" alt="instagram"/></a>
            <a href="" target="blank"> <img class="social-media" src="/images/fb.jpg" alt="instagram"/></a>
          </div>
        </div>

        <br/>
        <br/>


        <div className="row">
          <div className="col-lg-4 ml-auto text-center">
            <i className="fa fa-phone fa-3x mb-3 sr-contact"></i>
            <p className="phone">469-456-6789</p>
          </div>
          <div className="col-lg-4 mr-auto text-center">
            <i className="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>
            <p>
              <a href="mailto:your-email@your-domain.com">travel@stylemytravel.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
)
export default Contact;