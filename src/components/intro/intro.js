import React from "react";
import { Link } from "react-scroll";

import './intro.css';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">
                    I'M <span className="introName">Swapnil,</span><br /> A Full Stack and a Python Developer
                </span>
                <p className="introPara">
                    I am a skilled Web Developer with experience in developing and managing Web Apps. {" "}
                </p>
            </div>
        </section>
    );
};

export default Intro;
