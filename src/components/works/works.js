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
          <div className="projects">
            <img src={project} alt="Projects" className="WorksImg" />
          </div>
          <div className="skillBars">
            <div className="skillBar">
              <div className="skillBarText">
                <h2>Currently working on a E-commerce website</h2>
                <p></p>
              </div>
            </div>
            <div className="skillBar">
              <div className="skillBarText">
                <h2>AI Generated Report Detection</h2>
                <p>
                  This Python application employs Named Entity Recognition (NER)
                  to distinguish whether a report is authored by a human or
                  generated by AI, ensuring content authenticity and quality
                  assessment.
                  <br />
                  <a
                    href="https://github.com/DrDoooooom/AI-generated-Report-Detection.git"
                    target="_blank"
                    className="linktorepo"
                  >
                    Link to Project
                  </a>
                </p>
              </div>
            </div>
            <div className="skillBar">
              <div className="skillBarText">
                <h2>Virtual Mouse</h2>
                <p>
                  This project implements a virtual mouse system using hand
                  tracking and gestures. A webcam tracks the user's hand and
                  detects different gestures to trigger mouse actions like
                  moving, clicking, scrolling, etc.
                  <br />
                  <a
                    href="https://github.com/DrDoooooom/virtual-mouse.git"
                    target="_blank"
                    className="linktorepo"
                  >
                    Link to Project
                  </a>
                </p>
              </div>
            </div>
            <div className="skillBar">
              <div className="skillBarText">
                <h2>PDF to Audio</h2>
                <p>
                  This Python application simplifies PDF to audiobook conversion
                  by harnessing text-to-speech capabilities, making reading
                  accessible and convenient.
                  <br />
                  <a
                    href="https://github.com/DrDoooooom/pdf-to-audiobook.git"
                    target="_blank"
                    className="linktorepo"
                  >
                    Link to Project
                  </a>
                </p>
              </div>
            </div>
            <div className="skillBar">
              <div className="skillBarText">
                <h2>A Web-Scrapper</h2>
                <p>
                  This is a simple Python script that utilizes web scraping to
                  search Google and return the most relevant answer for a user's
                  query.
                  <br />
                  <a
                    href="https://github.com/DrDoooooom/a-simple-web-scraper.git"
                    target="_blank"
                    className="linktorepo"
                  >
                    Link to Project
                  </a>
                </p>
              </div>
            </div>
            <div className="skillBar">
              <div className="skillBarText">
                <h2>ToDo List</h2>
                <p>
                  This JavaScript-based To-Do list application seamlessly
                  integrates with MongoDB to store and manage tasks. It allows
                  users to add, update, and track their tasks with ease,
                  providing a flexible and efficient task management solution.
                  <br />
                  <a
                    href="https://github.com/DrDoooooom/todo-list-app.git"
                    target="_blank"
                    className="linktorepo"
                  >
                    Link to Project
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};
  
export default Works;