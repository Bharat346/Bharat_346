import React, { useState, useRef, useEffect } from "react";
import {
  FiSearch,
  FiHome,
  FiInfo,
  FiMail,
  FiUser,
  FiSettings,
  FiShoppingCart,
} from "react-icons/fi";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { RiFlashlightFill } from "react-icons/ri";
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
  const [searchActive, setSearchActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const searchInputRef = useRef(null);
  const menuRef = useRef(null);
  const navbarRef = useRef(null);

  const handleLinkClick = (e, url) => {
    e.preventDefault();
    setMenuOpen(false);
    
    if (url.startsWith('#')) {
      const element = document.querySelector(url);
      if (element) {
        const offset = element.getBoundingClientRect().top;
        const navbarHeight = navbarRef.current?.offsetHeight || 0;
        const offsetPosition = offset + window.pageYOffset - (scrollOffset || navbarHeight);
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, menuOpen]);

  useEffect(() => {
    // Close menu when clicking outside
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          !event.target.closest('.hamburger')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`navbar ${navbarVisible ? 'visible' : 'hidden'}`}
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

      <ul ref={menuRef} className={`nav-links ${menuOpen ? "open" : ""}`}>
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
        {showSearch && (
          <div className={`nav-search ${searchActive ? "active" : ""}`}>
            <input
              ref={searchInputRef}
              type="text"
              className="search-input"
              placeholder="Search..."
              onFocus={() => setSearchActive(true)}
              onBlur={() => setSearchActive(false)}
            />
            <FiSearch className="search-icon" />
            <RiFlashlightFill className="search-light-effect" />
          </div>
        )}

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <HiOutlineX className="menu-close-icon" /> : <HiOutlineMenuAlt3 className="menu-open-icon" />}
        </div>
      </div>

      <IoMdRocket className="floating-rocket" />
    </nav>
  );
};

export default NavBar;