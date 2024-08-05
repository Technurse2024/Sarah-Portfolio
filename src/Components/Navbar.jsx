import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <button
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
        aria-label="Toggle navigation menu"
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </button>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/" className="navbar--content" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="navbar--content" onClick={closeMenu}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/about" className="navbar--content" onClick={closeMenu}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbar--content" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/resume" className="navbar--content" onClick={closeMenu}>
              Download Resume
            </Link>
          </li>
        </ul>
      </div>
      <Link to="/contact" className="btn btn-outline-primary" onClick={closeMenu}>
        Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;
