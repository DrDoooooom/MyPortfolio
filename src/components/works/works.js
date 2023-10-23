import React from "react";

import './works.css';
import project from'../../assets/projects.gif'

const Works = () => {
    return (
      <section id="works">
        <h2 className="workstitle">My Portfolio</h2>
        <span className="worksDec">
          {" "}
          Coding my way to the future, one project at a time.{" "}
        </span>

        <div className="worksImgs">
          <div className="project1">
            <img src={project} alt="" className="WorksImg" />
            <p className="projectInfo1">
              Currently working on building a E-Comm Website
            </p>
            <p className="projectInfo1">
              Currently working on building a E-Comm Website
            </p>
            <p className="projectInfo1">
              Currently working on building a E-Comm Website
            </p>
            <p className="projectInfo1">
              Currently working on building a E-Comm Website
            </p>
            <p className="projectInfo1">
              Currently working on building a E-Comm Website
            </p>
            <p className="projectInfo1">
              Currently working on building a E-Comm Website
            </p>
          </div>
        </div>
      </section>
    );
};
  
export default Works;