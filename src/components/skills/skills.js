import React from "react";

import "./skills.css";
import JavaScript from "../../assets/javascript-logo.gif";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        {" "}
        I bring a strong skill set to the world of web development. My expertise
        includes React, JavaScript, and the MERN stack, allowing me to craft
        powerful web applications. I'm also adept at using Figma to create
        intuitive user interfaces. Let's embark on a journey to build innovative
        digital experiences together.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={JavaScript} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Full-Stack Developer</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;