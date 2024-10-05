import React, { useEffect } from "react";
import "./About.css";
import airport1 from "../../assets/airport1.jpg";

const About = () => {
  
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div>
        <div className="about-section">
          <div className="about-left">
            <img src={airport1} alt="Profile" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>
                As a dedicated and ambitious BE Computer Science and Engineering
                student, I bring a passion for technology and a strong
                foundation in computer science principles. Throughout my
                academic journey, I have actively engaged in coursework that
                spans a broad spectrum of topics, from algorithms and data
                structures to software engineering and web development.
              </p>
              <p>
                I am adept at problem-solving and have successfully applied
                theoretical knowledge to hands-on projects, demonstrating my
                commitment to practical application. My enthusiasm for staying
                updated with the latest industry trends, coupled with my
                collaborative nature, positions me as a proactive learner ready
                to contribute effectively in a dynamic team environment. Eager
                to leverage my skills and knowledge to tackle real-world
                challenges and make meaningful contributions in the field of
                computer science.
              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p>
                <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p>Javascript</p>
                <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>React js</p>
                <hr style={{ width: "80%" }} />
              </div>
              <div className="about-skill">
                <p>React Native</p>
                <hr style={{ width: "80%" }} />
              </div>
              <div className="about-skill">
                <p>Node js</p>
                <hr style={{ width: "75%" }} />
              </div>
              <div className="about-skill">
                <p>PostgreSQL</p>
                <hr style={{ width: "65%" }} />
              </div>
              <div className="about-skill">
                <p>Java</p>
                <hr style={{ width: "85%" }} />
              </div>
              <div className="about-skill">
                <p>SpringBoot</p>
                <hr style={{ width: "75%" }} />
              </div>
              <div className="about-skill">
                <p>C/C++</p>
                <hr style={{ width: "75%" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="about-achievements">
          <div className="about-achievement">
            <h1>3+</h1>
            <p>years of experience in the above-mentioned skills</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>5+</h1>
            <p>🙌 PROJECTS COMPLETED!!!🙌</p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default About;
