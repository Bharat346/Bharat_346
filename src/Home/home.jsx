import React from "react";
import { useState, useEffect } from "react";
import "./home.css";
import meimg from "../../public/img/me.jpg";
import resume from "../../public/img/resume.pdf";

const mailto = (email) => {
  window.location.href = `mailto:${email}`;
};

function downloadFile(url, filename) {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function Section_1() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="section1" id="home">
      <div className="sec1-container">
        <div className="content-wrapper">
          <div className="sec1-content">
            <h1>
              Bharat <span className="accent">Kumar</span>
            </h1>
            <p className="description">
              ✨ Computer Science Student @ NIT Delhi | React.js Developer |
              Node.js Developer | MongoDB | SQL | JavaScript | AI Enthusiast |
              DSA & Algorithms | Reasoning & Quantitative Aptitude ✨
            </p>
          </div>
          <div className="sec1-btns">
            <button 
              className="primary-btn"
              onClick={() => downloadFile(resume, "Bharat_resume")}
            >
              Resume
            </button>
            <button 
              className="secondary-btn"
              onClick={() => mailto("231210034@nitdelhi.ac.in")}
            >
              Contact me
            </button>
          </div>
        </div>
        <div 
          className="profile-image" 
          style={{ backgroundImage: `url(${meimg})` }}
        />
      </div>
    </section>
  );
}

export default Section_1;