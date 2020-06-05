import React from "react";
import { withRouter } from "react-router-dom";
import "../scss/galleryProjects.scss";

const ListProjects = (props) => {
  const { project } = props;

  // const [hideProject, setHideProject] = useState("flex");

  // if (project.category !== "web") {
  //   setHideProject("none");
  //   console.log("les projets:", project);
  //   console.log("les category:", project.category);
  // }
  // const targetData = event.currentTarget.category;

  // if (targetData !== "web") {
  //   setHideProject("none");
  // }

  // props.getProject(
  //   if (project.category !== "web") {
  //   setHideProject("none");
  //   console.log("les projets:", project);
  //   console.log("les category:", project.category);
  // }
  // )

  console.log("category des projets:", project.category);

  return (
    <div
      id={project.id}
      data-category={project.category}
      className="media-contenair"
    >
      <img src={project.cover} alt="UniARTS " />
    </div>
  );
};

export default withRouter(ListProjects);
