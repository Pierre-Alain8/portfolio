import React from "react";
import { useDispatch } from "react-redux";
import "../scss/navProjects.scss";
import { withRouter } from "react-router-dom";

const NavProjects = (props) => {
  const dispatch = useDispatch();

  const showProject = (category) => {
    dispatch({ type: "SHOW_PROJECT", projectDev: category });
    // j'envoie à chaque clique les parammètres de la fonction showArticle (les catégories) aux reducer
  };

  return (
    <div className="nav-projects-container">
      <button id="button-project" onClick={() => showProject("web")}>
        Web{" "}
      </button>
      <button onClick={() => showProject("blog")}>Blog</button>
      <button onClick={() => showProject("interviews")}>Interviews</button>
    </div>
  );
};

export default withRouter(NavProjects);
