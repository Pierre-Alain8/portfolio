import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../scss/gridProjects.scss";
import { withRouter } from "react-router-dom";
import ListProjects from "./ListProjects";
import projectsCreate from "../projects/projects";
import NavProjects from "./NavProjects";

const GridProjects = (props) => {
  const [projects, setProjects] = useState([]);

  const projectFilter = useSelector((state) => state.projectFilter);

  useEffect(() => {
    setProjects(projectsCreate);
    console.log("les projets:", projectsCreate);
    console.log("les catégories: ", projectsCreate.category);
  }, []);

  const filter = projectsCreate.filter((project) => {
    return project.category === projectFilter;
    // il récupère les projets en fonctions des paramètres qui arrive de redux à chaque clic du boutton
  });

  console.log("les projets 2", projects.category);
  return (
    <div className="list-projects-container">
      <NavProjects />
      <div className="gallery-projects">
        {projects &&
          filter.map((project, index) => {
            return <ListProjects key={index} project={project} />;
          })}
      </div>
    </div>
  );
};

export default withRouter(GridProjects);
// props type array
