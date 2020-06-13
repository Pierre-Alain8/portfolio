import React from "react";
import { motion } from "framer-motion";
import { withRouter } from "react-router-dom";
import ModalProject from "./ModalProject";
import "../scss/projects.scss";

import GridProjects from "./GridProjects";

const Projects = (props) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="projects-portfolio"
    >
      <div className="projects-container">
        <GridProjects />
        <ModalProject />
      </div>
    </motion.section>
  );
};

export default withRouter(Projects);
