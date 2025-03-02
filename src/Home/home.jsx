import React from "react";
import { useState, useEffect } from "react";
import "./home.css";
import meimg from "../../public/img/me.jpg";
import resumeimg from "../../public/img/resume.jpg"

// import TypeWriter from "./typewriter.jsx";

const mailto = (email) => {
    window.location.href = `mailto:${email}`;
};

function downloadFile(url, filename) {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename; // Sets the filename
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function Section_1() {
  return (
    <>
      <div className="section1" id="home">
        <div className="sec1">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div className="sec1-content">
              <h1
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                Bharat{" "}
                <span
                  style={{
                    color: "var(--main-color)",
                  }}
                >
                  Kumar
                </span>
              </h1>
              <p>
                ✨ Computer Science Student @ NIT Delhi | React.js Developer |
                Node.js Developer | MongoDB | SQL | JavaScript | AI Enthusiast |
                DSA & Algorithms | SSC CGL Aspirant | Reasoning & Quantitative
                Aptitude | General Knowledge & General Studies Enthusiast ✨
              </p>
            </div>
            <div className="sec1-btns">
              <button onClick={() => {downloadFile(resumeimg, "Bharat_resume");}}>Resume</button>
              <button onClick={() => mailto("231210034@nitdelhi.ac.in")}>
                Contact me
              </button>
            </div>
          </div>
          <div
            className="sec1-img"
            style={{
              backgroundImage: `url(${meimg})`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Section_1;
