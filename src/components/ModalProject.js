import React from "react";
import { Link } from "react-router-dom";
import "../scss/modalProject.scss";
import { useSelector, useDispatch } from "react-redux";
import Modal from "@material-ui/core/Modal";

const ModalProject = (props) => {
  const dispatch = useDispatch(); // useDispatch consiste à activer les actions du reducer (liste de nos actions)
  const modalProjectBool = useSelector((state) => state.modalProjectBool);
  const project = useSelector((state) => state.project);
  console.log("modal " + modalProjectBool);

  const handleCloseProject = () => {
    // Dans le dispatch on spécifie l'action et lui passe les paramètres du projets
    dispatch({ type: "CLOSE_MODAL_PROJECT_BOOL", project: props.project });
  };

  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={modalProjectBool}
    >
      <div className="modal-project" id={project.id}>
        <div className="header-modal">
          <div className="cover-modal-project">
            <img src={project.cover} alt="project-uniart" />
          </div>

          <div className="modal-project-title">
            <h1>{project.title}</h1>
            <p>{project.subtitle}</p>
          </div>

          <div onClick={handleCloseProject} className="close-modal">
            <img src="img/button-close.png" alt="close modal" />
          </div>
        </div>

        <div className="project-main">
          <div className="project-description">
            <div className="modal-resume-container">
              <h2>Résumé du projet</h2>
              <div className="resume-content">
                <p>{project.resume}</p>
              </div>
            </div>

            <div className="tech-container">
              <h2>TECHNOS</h2>
              <p>{project.technologies}</p>
              <h2>LANGAGES</h2>
              <p>{project.language}</p>
            </div>
          </div>

          <div className="project-link">
            <div className="project-image">
              <img src={project.img} alt="project description" />
            </div>

            <div className="button-link">
              <Link>LIENS</Link>
              <Link>GITHUB</Link>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalProject;
