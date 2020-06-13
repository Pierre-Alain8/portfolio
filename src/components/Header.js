import React, { useState } from "react";
import "../scss/header.scss";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [navIndicator, setNavIndicator] = useState("animation start-home");

  const handleClickHome = () => {
    setNavIndicator("animation start-home");
  };

  const handleClickAbout = () => {
    setNavIndicator("animation start-about");
  };
  const handleClickSkills = () => {
    setNavIndicator("animation start-skills");
  };
  const handleClickProjects = () => {
    setNavIndicator("animation start-projects");
  };
  const handleClickContact = () => {
    setNavIndicator("animation start-contact");
  };

  return (
    <section className="header-portfolio">
      <div className="navbar">
        <Link
          onClick={handleClickHome}
          id="home-button"
          className="nav-links"
          to="/"
        >
          <img id="home-img-1" src="img/Logo-v2.png" alt="logo v2" />
          <img id="home-img-2" src="img/home.png" alt="home" />
          HOME
        </Link>

        <Link onClick={handleClickAbout} className="nav-links" to="/about">
          <img src="img/About.png" alt="about" />
          ABOUT
        </Link>

        <Link onClick={handleClickSkills} className="nav-links" to="/skills">
          <img src="img/skills.png" alt="skills" />
          SKILLS
        </Link>

        <Link
          id="project-link"
          onClick={handleClickProjects}
          className="nav-links"
          to="/Projects"
        >
          <img src="img/projects.png" alt="projects" />
          PROJETS
        </Link>

        <Link onClick={handleClickContact} className="nav-links" to="/contact">
          <img src="img/Contact.png" alt="contact" />
          Contact
        </Link>
        <div className={navIndicator}></div>
      </div>
    </section>
  );
};

export default Header;
