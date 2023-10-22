import React from "react";

import "./contactme.css";
import Gmail from "../../assets/Gmail_Logo_128px.png";
import Gmailgif from "../../assets/Gmail_Logo_128px.gif";
import LinkedIn from "../../assets/LinkedIn.jpg";
import LinkedIngif from "../../assets/LinkedIn.gif";

const ContactMe = () => {
  return (
    <section className="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <div className="links">
          <div className="emailId">
            <img src={Gmail} alt="Gmail" className="link" id="onHover" />
            <h5>swapnil200229@gmail.com</h5>
            </div>
            <br/>
          <div className="linkdIn">
            <img src={LinkedIn} alt="LinkedIn" className="link" id="onHover" />
            <br />
            <a
              href="www.linkedin.com/in/swapnil-kharat-29300a181"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn/swapnil-kharat-29300a181
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
