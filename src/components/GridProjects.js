import React, { useState, useEffect } from "react";
import "../scss/gridProjects.scss";
import { withRouter } from "react-router-dom";
import GalleryProjects from "./GalleryProjects";
import projectsCreate from "../projects/projects";

const GridProjects = (props) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsCreate);
  }, []);

  return (
    <div className="list-projects-container">
      <div className="gallery-projects">
        {projects.map((project, index) => {
          return <GalleryProjects key={index} project={project} />;
        })}
      </div>
    </div>
  );
};

export default withRouter(GridProjects);
// props type array
