import React from "react";
import { withRouter } from "react-router-dom";
import "../scss/galleryProjects.scss";

const GalleryProjects = (props) => {
  const { project } = props;

  return (
    <div id={project.id} className="media-contenair">
      <img src={project.cover} alt="UniARTS " />
    </div>
  );
};

export default withRouter(GalleryProjects);
