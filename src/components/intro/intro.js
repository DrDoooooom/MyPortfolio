import React from "react";
import { Link } from "react-scroll";

import './intro.css';
import btnimg from '../../assets/hireme.png'

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">
                    I'M <span className="introName">Swapnil,</span><br /> A Full Stack Developer
                </span>
                <p className="introPara">
                    I am a skilled Web Developer with experience in developing and managing Web Apps. {" "}
                </p>
                <Link>
                    <button className="btn">
                        <img src={btnimg} alt="Hire Me" className="btnimg" />
                        Hire Me
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Intro;
