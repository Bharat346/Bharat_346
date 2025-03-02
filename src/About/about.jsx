import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./about.css";
import meimg from "../../public/img/me.jpg";

const AboutMe = () => {
  const handleMailto = () => {
    window.location.href = "mailto:231210034@nitdelhi.ac.in";
  };

  return (
    <>
      <h1 id="about"
        style={{
          color: "var(--main-color)",
          marginLeft: "30px",
        }}
      >
        About me
      </h1>
      <div className="about-container">
        <div className="about-card">
          <div className="about-content">
            <p>
              As a{" "}
              <b className="highlight">
                Computer Science and Engineering (CSE) student
              </b>{" "}
              at <b>NIT Delhi</b>, Currently I have {" "}
              <b>CGPA of 8.43</b>, I am dedicated to mastering technologies like{" "}
              <b>React.js, Node.js, MongoDB</b>, and backend systems. I am
              passionate about problem-solving and constantly explore
              advancements in Artificial Intelligence and Full Stack
              Development.
            </p><br />

            <p>
              Alongside my technical pursuits, I am an aspiring{" "}
              <b className="highlight">SSC CGL Aspirant</b>, preparing
              rigorously to excel in one of India's most prestigious competitive
              examinations. I enjoy
              solving complex logical problems and enhancing my aptitude in
              quantitative and reasoning domains.
            </p><br />

            <p>
              Beyond academics and career goals, I am deeply enthusiastic about
              sports. I actively participate in{" "}
              <b>outdoor games like Cricket, Badminton, and Kabaddi</b>, which
              help me build teamwork and resilience. Additionally, I enjoy{" "}
              <b>Chess</b> as an indoor sport, sharpening my strategic thinking
              and problem-solving skills. Engaging in sports allows me to
              maintain a balanced and focused mindset in both my professional
              and personal life.
            </p>

            <br />
            <div className="keys">
              <p>CSE Student</p>
              <p>Full Stack Developer</p>
              <p>SSC CGL Aspirant</p>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default AboutMe;
