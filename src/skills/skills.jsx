import React from "react";
import "./skills.css";
import { FaCode, FaCogs, FaTools, FaGlobe, FaBrain } from "react-icons/fa";

const Skills = () => {
  const skillsData = {
    "Programming Languages": { 
      icon: <FaCode className="skill-icon" />, 
      skills: ["JavaScript", "Python", "C++", "C"] 
    },
    "Libraries & Frameworks": { 
      icon: <FaCogs className="skill-icon" />, 
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL"] 
    },
    "Technologies": { 
      icon: <FaTools className="skill-icon" />, 
      skills: ["Git", "DBMS"] 
    }
  };

  return (
    <section className="skills-section" id="skill">
      <h1 className="section-title">Skills</h1>
      <div className="skills-grid">
        {Object.entries(skillsData).map(([category, data]) => (
          <SkillCard 
            key={category}
            category={category}
            icon={data.icon}
            skills={data.skills}
          />
        ))}
      </div>
    </section>
  );
};

const SkillCard = ({ category, icon, skills }) => {
  return (
    <div className="skill-card">
      <div className="skill-header">
        {icon}
        <h3>{category}</h3>
      </div>
      <div className="skills-container">
        {skills.map((skill) => (
          <span key={skill} className="skill-badge">{skill}</span>
        ))}
      </div>
    </div>
  );
};

export default Skills;