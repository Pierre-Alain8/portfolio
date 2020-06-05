import React from "react";
import { withRouter } from "react-router-dom";
import "../scss/projects.scss";

import GridProjects from "./GridProjects";

const Projects = (props) => {
  return (
    <section className="projects-portfolio">
      <div className="projects-container">
        <GridProjects />
      </div>
    </section>
  );
};

export default withRouter(Projects);