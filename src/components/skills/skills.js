import React from "react";

import "./skills.css";
import JavaScript from "../../assets/javascript-logo.gif";
import Python from "../../assets/python-logo.gif"

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        {" "}
        I bring a robust skill set to the world of web development as a Full
        Stack Developer. My expertise spans the entire web development spectrum,
        from front-end technologies like React to back-end technologies like
        MongoDB. With this broad knowledge, I can create end-to-end web
        applications and ensure seamless user experiences. Additionally, I'm a
        Python Developer with a strong background in software development and
        versatile applications. My expertise in Python allows me to tackle a
        wide range of projects, from web development to data analysis, and more.
        Whether it's building web applications or automating complex tasks,
        Python is my tool of choice. Let's harness the power of both Full Stack
        development and Python to create efficient and innovative solutions
        together.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={JavaScript} alt="JavaScript" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Full-Stack Developer</h2>
            <p>
              I'm a Full Stack Developer with expertise in React, MongoDB, and
              more. I create end-to-end web applications for seamless user
              experiences. Let's build innovative digital experiences together.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Python} alt="Python" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Python Developer</h2>
            <p>
              I'm a Python Developer experienced in web development and data
              analysis. I use Python for versatile projects, including web apps
              and automation. Let's harness Python's power for efficient
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;