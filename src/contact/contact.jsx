import React from "react";
import "./contact.css";
import { MdContacts } from "react-icons/md";
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h1 className="section-heading">
        <MdContacts className="contact-icon" />
        Contact Me
      </h1>
      
      <div className="contact-card">
        <div className="contact-header">
          <h2 className="contact-title">Let's Connect & Collaborate</h2>
          <p className="contact-subtitle">
            Feel free to reach out for collaborations, project discussions, or just to say hi!
          </p>
        </div>
        
        <div className="contact-details">
          <div className="detail-item">
            <FaEnvelope className="detail-icon" />
            <div>
              <h3>Email</h3>
              <a href="mailto:231210034@nitdelhi.ac.in" className="detail-value">
                231210034@nitdelhi.ac.in
              </a>
            </div>
          </div>
          
          <div className="detail-item">
            <MdContacts className="detail-icon" />
            <div>
              <h3>Address</h3>
              <p className="detail-value">
                Near Harishchandra Hospital, NIT Hostel <span className="highlight">SRHC-04</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="social-links">
          <a
            href="https://github.com/Bharat346"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/u/Bharat346/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LeetCode"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://www.linkedin.com/in/bharat-kumar-ab49b9297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/bharatchaudhary4913?igsh=NGNjcHJsNHFmaHY0"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;