import React from "react";
import "./skills.css";
import { FaCode, FaCogs, FaTools, FaGlobe, FaBrain } from "react-icons/fa";

const skillsData = {
  "General Knowledge": { icon: <FaGlobe style={{
    color : "var(--main-color)",
    fontSize : "1.5rem"
  }} />, skills: ["Geography", "History", "Economy", "Polity", "Biology"] },
  "Reasoning & Aptitude" : { icon: <FaBrain style={{
    color : "var(--main-color)",
    fontSize : "1.5rem"
  }} />, skills: ["Math", "Reasoning"] }
};

const Knows = () => {
  return (
    <>
      <br />
      <h1 style={{ color: "var(--main-color)", marginLeft: "30px" }}>Knowledge ( GK / GS) </h1><br />
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
      <br /><br />
    </>
  );
};

export default Knows;
