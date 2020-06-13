import React from "react";
import "../scss/home.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Home = (props) => {
  return (
    <motion.section
      className="home-portfolio"
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="profile-container">
        <div className="picture-profile">
          <img
            src="img/picture-profile-portfolio.jpg"
            alt="Pierre-Alain Agnan"
          />
        </div>
      </div>

      <article className="intro-portfolio">
        <h1>
          Hello, <br /> je suis Pierre-Alain Agnan <br /> Développeur web &
          mobile
        </h1>

        <p>Front-end /back-end/javascript</p>
        <div className="logo-container">
          <img src="img/Logo-v1.png" alt="logo portfolio" />
        </div>
      </article>

      <div className="contact-button">
        <Link className="link-to-contact" to="/contact">
          <button> CONTACT</button>
        </Link>
      </div>
    </motion.section>
  );
};

export default withRouter(Home);
