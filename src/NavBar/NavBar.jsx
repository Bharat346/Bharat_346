import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

const NavBar = ({
  logo,
  name,
  navLinks,
  showSearch,
  bgColor,
  textColor,
  expandColor,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="navbar"
      style={{
        "--bg-color": bgColor,
        "--text-color": textColor,
        "--expanded-bg-color": expandColor,
      }}
    >
      <div className="nav-logo">
        {logo ? <img src={logo} alt="logo" className="logo" /> : ""}
        <span className="nav-name">{name}</span>
      </div>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link, index) => (
          <li key={index}>
            <a className="nav-links-align" href={link.url} onClick={() => setMenuOpen(false)}>
              {link.icon && <span className="nav-icon">{link.icon}</span>}{" "}
              <span>{link.text}</span>
            </a>
          </li>
        ))}
      </ul>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
