import React from "react";
import "./contactme.css";
import Gmail from "../../assets/Gmail_Logo_128px.png";
import Gmailgif from "../../assets/Gmail_Logo_128px.gif";
import LinkedIn from "../../assets/LinkedIn.jpg";
import LinkedIngif from "../../assets/LinkedIn.gif";
import GitHub from "../../assets/GitHub.png"
import GitLab from "../../assets/GitLab.png"

const ContactMe = () => {
  const openEmail = () => {
    window.open("mailto:swapnil200229@gmail.com", "_blank");
  };

  const openLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/swapnil-kharat-29300a181",
      "_blank"
    );
  };

  const openGitHub = () => {
    window.open("https://github.com/DrDoooooom", "_blank");
  };
 
  const openGitLab = () => {
    window.open("https://gitlab.com/DrDoooooom", "_blank");
  };

  return (
    <section className="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <div className="links">
          <div className="emailId" onClick={openEmail}>
            <img src={Gmail} alt="Gmail" className="link" id="onHover" />
            <h5 className="linktoaccount">swapnil200229@gmail.com</h5>
          </div>
          <br />
          <div className="linkdIn" onClick={openLinkedIn}>
            <img src={LinkedIn} alt="LinkedIn" className="link" id="onHover" />
            <br />
            <a
              href="https://www.linkedin.com/in/swapnil-kharat-29300a181"
              target="_blank"
              rel="noopener noreferrer"
              className="linktoaccount"
            >
              LinkedIn/swapnil-kharat-29300a181
            </a>
          </div>
          <br />
          <div className="github" onClick={openGitHub}>
            <img src={GitHub} alt="GitHub" className="link" id="onHover" />
            <br />
            <a
              href="https://github.com/DrDoooooom"
              target="_blank"
              rel="noopener noreferrer"
              className="linktoaccount"
            >
              GitHub/DrDoooooom
            </a>
          </div>
          <br />
          <div className="gitlab" onClick={openGitLab}>
            <img src={GitLab} alt="GitLab" className="link" id="onHover" />
            <br />
            <a
              href="https://gitlab.com/DrDoooooom"
              target="_blank"
              rel="noopener noreferrer"
              className="linktoaccount"
            >
              GitLab/DrDoooooom
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
