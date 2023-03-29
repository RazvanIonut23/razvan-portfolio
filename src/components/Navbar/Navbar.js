import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.scss";
import logo from "../../images/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setstate] = useState(false);
  const [click, setClick] = useState("home");
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const changeValueOnScrokk = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    console.log(scrollPosition);
    if (scrollPosition <= 350) {
      setstate("home");
    } else if (scrollPosition <= 900) {
      setstate("about");
    } else if (scrollPosition <= 1550) {
      setstate("skills");
    } else if (scrollPosition <= 1800) {
      setstate("work");
    }
  }, [scrollPosition]);

  window.addEventListener("scroll", changeValueOnScrokk);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarBrand}>
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className={styles.navbarLink}
          >
            <img src={logo} alt="Razvan" />
          </Link>
        </div>
        <button className={styles.navbarToggle} onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`${styles.navbarMenu} ${isOpen ? styles.show : ""}`}>
          <li className={styles.navbarItem}>
            <Link
              onClick={() => setClick("home")}
              activeClass="navbarLinkActive"
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={`${styles.navbarLink} ${
                state === "home" ? styles.active : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link
              onClick={() => setClick("about")}
              to="about"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              activeClass="navbarLinkActive"
              className={`${styles.navbarLink} ${
                state === "about" ? styles.active : ""
              }`}
            >
              About
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link
              onClick={() => setClick("skills")}
              activeClass="navbarLinkActive"
              to="skills"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              className={`${styles.navbarLink} ${
                state === "skills" ? styles.active : ""
              }`}
            >
              Skills
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link
              onClick={() => setClick("work")}
              activeClass="navbarLinkActive"
              to="work"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              className={`${styles.navbarLink} ${
                state === "work" ? styles.active : ""
              }`}
            >
              Work
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
