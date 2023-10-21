import React from "react";

import './works.css';
// import portfolio2 from '../../assets/portfolio-2.jpeg';

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
                    {/* <img src={portfolio2} alt="" className="WorksImg" /> */}
                    <div className="wrapper">
                        <div className="neon-wrapper">
                            <div className="neon-text">
                                PROJECTS
                            </div>
                        </div>
                    </div>
                    <p className="projectInfo1">
                        Currently working on biulding a E-Commerce Website
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Works;