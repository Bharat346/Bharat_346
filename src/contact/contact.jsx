import React from "react";
import "./contact.css";
import { MdContacts } from "react-icons/md";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCode,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <h1 id="contact" style={{ color: "var(--main-color)", marginLeft: "30px" }}>
        contact me
      </h1>
      <div className="contact-card">
        <h1 className="contact-title">Let's Connect & Collaborate</h1>
        <br />
        <p className="contact-text">
          Feel free to reach out for collaborations, project discussions, or
          just to say hi!
        </p>
        <br />
        <div className="contact-details">
          <p>
            <b
              style={{
                fontSize: "1.2rem",
              }}
            >
              Email
            </b>
            :{" "}
            <a href="mailto:bharatkumar@example.com">bharatkumar@example.com</a>
          </p>
          <p>
            <b
              style={{
                fontSize: "1.2rem",
              }}
            >
              Address
            </b>{" "}
            : Near Harishchandra Hospital , Nit Hostel <span style={{
                color : "var(--main-color)"
            }}>SRHC-04</span>
          </p>
        </div><br />
        <div className="cpntact-links">
          <div className="social-links">
              <a
                href="https://github.com/Bharat346/PieChart.js"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://leetcode.com/u/Bharat346/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCode />
              </a>
              <a
                href="https://www.linkedin.com/in/bharat-kumar-ab49b9297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/bharatchaudhary4913?igsh=NGNjcHJsNHFmaHY0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram /> 
              </a>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Contact;
