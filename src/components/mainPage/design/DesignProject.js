import React from "react";
import "./DesignProject.css";
import Carousel from "../carousel/Carousel";

const DesignProject = ({ name, images, description, techUsed, isOpen, openProject, closeProject, id, openProjects }) => {



  return (
    <div>
      {!openProjects.includes(id) ? (
        <div className="project-card" onClick={() => openProject(id)}>
          <div className="card-overlay">
            <img src={images[0]} alt={name} width="100%" title={name} />
          </div>
        </div>
      ) : (
        <div className="project-popup">
          <h3>{name}</h3>
          <Carousel carouselItems={images}  alt={name} title={name} />
          <br />
          <p>{description}</p>
          <br />
          <button className="--btn" onClick={closeProject} title="Close">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default DesignProject;
