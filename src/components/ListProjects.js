import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import "../scss/galleryProjects.scss";

const ListProjects = (props) => {
  const { project } = props;

  const dispatch = useDispatch(); // useDispatch consiste à activer les actions du reducer (liste de nos actions)
  const modal = useSelector((state) => state.modalProjectBool);

  const handleOpenProject = () => {
    // Dans le dispatch on spécifie l'action et lui passe les paramètres du projets
    dispatch({ type: "OPEN_MODAL_PROJECT_BOOL", project: props.project });
    console.log("ModalBool", modal);
  };

  return (
    <div
      onClick={handleOpenProject}
      id={project.id}
      data-category={project.category}
      className="media-contenair"
    >
      <img src={project.cover} alt="UniARTS " />
    </div>
  );
};

export default withRouter(ListProjects);
