import React from "react";
import "../scss/skills.scss";
import { motion } from "framer-motion";
import cv from "../files/CV-Pierre-Alain-Agnan-Developpeur-Web.pdf";
import GetAppSharpIcon from "@material-ui/icons/GetAppSharp";
import { withRouter } from "react-router-dom";

const Skills = (props) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="skills-portfolio"
    >
      <div className="skills-home-container">
        <div className="tech-skills-container">
          <div className="tech-container">
            <div className="tech-content">
              <h2>TECHNOLOGIES</h2>
              <div className="technos">
                <ul>
                  <li>
                    <div>Javascript</div>
                  </li>
                  <li>
                    <div>HTML5</div>
                  </li>
                  <li>
                    <div>CSS3</div>
                  </li>
                  <li>
                    <div>NO SQL</div>
                  </li>
                  <li>
                    <div>JEST</div>
                  </li>
                </ul>

                <ul>
                  <li>
                    <div>Mongo Db</div>
                  </li>
                  <li>
                    <div>Express js</div>
                  </li>
                  <li>
                    <div>Node Js</div>
                  </li>
                  <li>
                    <div>React js</div>
                  </li>
                  <li>
                    <div>Redux</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bar-1"></div>
          <div className="skills-container">
            <div className="skills-content">
              <div className="skills-title">
                <h2>COMPETENCES</h2>
              </div>
              <div className="skills">
                <ul>
                  <li>Méthodes agiles</li>
                  <li>Travail en mode projet</li>
                  <li>Compréhension anglais technique</li>
                  <li>Veille, auto-information</li>
                  <li>Responsive design</li>
                  <li>MERN STACK</li>
                  <li>Développement front-end</li>
                  <li>Développement back-end</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bar-2"></div>
        <div className="soft-certification-container">
          <div className="soft-skills-container">
            <div className="soft-skills-content">
              <h2>SOFT-SKILLS</h2>
              <div className="soft-skills">
                <p>
                  Ouvert d’esprit, rigoureux,
                  <br /> polyvalent, adaptabilité,
                  <br />
                  et surtout passioné par <br />
                  l’apprentissage et son métier
                </p>
              </div>
            </div>
          </div>
          <div className="certification-container">
            <div className="certification-content">
              <h2>CERTIFICATIONS</h2>
              <div className="certification">
                <p>Méthodes agiles de gestion et amorçage de projet</p>

                <p>Opquast</p>
                <div className="opquast-cover">
                  <img src="img/opquast.png" alt="certification opquast" />
                </div>
              </div>
            </div>
          </div>

          <a className="link-cv" download="cv-pierre-alain-agnan" href={cv}>
            <GetAppSharpIcon /> cv
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default withRouter(Skills);
