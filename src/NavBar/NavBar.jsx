import React, { useState, useRef, useEffect } from "react";
import { FiSearch, FiHome, FiInfo, FiMail } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { IoMdRocket } from "react-icons/io";
import { BsStars } from "react-icons/bs";
import "./NavBar.css";

const NavBar = ({
  logo,
  name,
  navLinks = [
    { text: "Home", url: "#home", icon: <FiHome /> },
    { text: "About", url: "#about", icon: <FiInfo /> },
    { text: "Contact", url: "#contact", icon: <FiMail /> },
  ],
  showSearch = true,
  bgColor = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  textColor = "#ffffff",
  expandColor = "rgba(30, 30, 30, 0.95)",
  scrollOffset = 80,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const menuRef = useRef(null);
  const navbarRef = useRef(null);

  const handleLinkClick = (e, url) => {
    e.preventDefault();
    setMenuOpen(false);

    if (url.startsWith("#")) {
      const element = document.querySelector(url);
      if (element) {
        const offset = element.getBoundingClientRect().top;
        const navbarHeight = navbarRef.current?.offsetHeight || 0;
        const offsetPosition =
          offset + window.pageYOffset - (scrollOffset || navbarHeight);

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      window.location.href = url;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        // At top of page, always show navbar
        setNavbarVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        if (currentScrollY > navbarRef.current?.offsetHeight && !menuOpen) {
          setNavbarVisible(false);
        }
      } else {
        // Scrolling up
        setNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, menuOpen]);

  useEffect(() => {
    // Close menu when clicking outside
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest(".hamburger")
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Add this useEffect to handle body class
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  return (
    <nav
      ref={navbarRef}
      className={`navbar ${navbarVisible ? "visible" : "hidden"}`}
      style={{
        "--bg-color": bgColor,
        "--text-color": textColor,
        "--expanded-bg-color": expandColor,
        "--scroll-offset": `${scrollOffset}px`,
      }}
    >
      <div className="nav-logo">
        {logo && <img src={logo} alt="logo" className="logo" />}
        <span className="nav-name">
          {name}
          <BsStars className="sparkle-icon" />
        </span>
      </div>

      <ul
        ref={menuRef}
        id="nav-links"
        className={`nav-links ${menuOpen ? "open" : ""}`}
        role="menu"
      >
        {navLinks.map((link, index) => (
          <li key={index}>
            <a
              className="nav-link"
              href={link.url}
              onClick={(e) => handleLinkClick(e, link.url)}
            >
              <span className="nav-icon-wrapper">
                {link.icon && <span className="nav-icon">{link.icon}</span>}
                <span className="nav-text">{link.text}</span>
              </span>
              <span className="nav-link-hover-effect"></span>
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" ? setMenuOpen(!menuOpen) : null)}
        >
          {menuOpen ? (
            <HiOutlineX className="menu-close-icon" />
          ) : (
            <HiOutlineMenuAlt3 className="menu-open-icon" />
          )}
        </div>
      </div>

      <IoMdRocket className="floating-rocket" />
    </nav>
  );
};

export default NavBar;
