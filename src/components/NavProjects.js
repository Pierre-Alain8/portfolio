import React from "react";
import "../scss/navProjects.scss";
import { withRouter } from "react-router-dom";

const NavProjects = (props) => {
  return (
    <div className="nav-projects-container">
      <button>Web </button>
      <button>Blog</button>
      <button>Interviews</button>
    </div>
  );
};

export default withRouter(NavProjects);
