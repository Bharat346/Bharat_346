import React from "react";
import "./skills.css";
import { FaCode, FaCogs, FaTools, FaGlobe, FaBrain } from "react-icons/fa";

const skillsData = {
  "Programming Languages": { icon: <FaCode style={{
    color : "var(--main-color)",
    fontSize : "1.5rem"
  }} />, skills: ["JavaScript", "Python", "C++", "C"] },
  "Libraries & Frameworks": { icon: <FaCogs style={{
    color : "var(--main-color)",
    fontSize : "1.5rem"
  }} />, skills: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL"] },
  "Technologies": { icon: <FaTools style={{
    color : "var(--main-color)",
    fontSize : "1.5rem"
  }} />, skills: ["Git", "DBMS"] }
};

const Skills = () => {
  return (
    <>
      <br />
      <h1 id="skill" style={{ color: "var(--main-color)", marginLeft: "30px" }}>Skills</h1><br />
      <div className="skill-set">
        {Object.entries(skillsData).map(([category, data]) => (
          <div className="skill-set-div" key={category}>
            <h3 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {data.icon} {category}
            </h3>
            <div className="skills-cont">
              {data.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <br />
    </>
  );
};

export default Skills;
