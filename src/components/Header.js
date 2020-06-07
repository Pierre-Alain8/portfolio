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
      <div className="home-link">
        <Link onClick={handleClickHome} className="home-button" to="/">
          Home
        </Link>
      </div>
      <div className="navbar">
        <Link onClick={handleClickAbout} className="nav-links" to="/about">
          <img src="img/About.png" alt="about" />
          About
        </Link>

        <Link onClick={handleClickSkills} className="nav-links" to="/skills">
          <img src="img/skills.png" alt="skills" />
          Compétences
        </Link>

        <Link
          onClick={handleClickProjects}
          className="nav-links"
          to="/Projects"
        >
          <img src="img/projects.png" alt="projects" />
          Projets
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
