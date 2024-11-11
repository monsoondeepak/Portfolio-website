import React from "react";
import "./About.css";
import { assets } from "../../assets/assets.js";
import "./script.js";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>

      <div className="about-section">
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello! Everyone I am Deepak Kunwar. I am an experienced Web
              Developer with over 2 years of experience, also I am a Graphic
              Designer and a Script Writter.
            </p>
            <p>Coding is not only my passion it is my life.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <div className="progress-bar">
                <div className="html">
                  <span>70%</span>
                </div>
              </div>
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <div className="progress-bar">
                <div className="react">
                  <span>60%</span>
                </div>
              </div>
            </div>
            <div className="about-skill">
              <p>JavaScript</p>{" "}
              <div className="progress-bar">
                <div className="javascript">
                  <span>50%</span>
                </div>
              </div>
            </div>
            <div className="about-skill">
              <p>Graphic tools</p>
              <div className="progress-bar">
                <div className="graphic">
                  <span>55%</span>
                </div>
              </div>
            </div>
            <div className="about-skill">
              <p>PHP/Laravel</p>
              <div className="progress-bar">
                <div className="php">
                  <span>60%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-left">
          <img src={assets.Deep} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
