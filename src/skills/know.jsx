import React from "react";
import "./skills.css";
import { FaCode, FaCogs, FaTools, FaGlobe, FaBrain } from "react-icons/fa";

const Knows = () => {
  const knowledgeData = {
    "General Knowledge": { 
      icon: <FaGlobe className="skill-icon" />, 
      skills: ["Geography", "History", "Economy", "Polity", "Biology"] 
    },
    "Reasoning & Aptitude": { 
      icon: <FaBrain className="skill-icon" />, 
      skills: ["Math", "Reasoning"] 
    }
  };

  return (
    <section className="skills-section">
      <h1 className="section-title">Knowledge (GK/GS)</h1>
      <div className="skills-grid">
        {Object.entries(knowledgeData).map(([category, data]) => (
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

export default Knows ;