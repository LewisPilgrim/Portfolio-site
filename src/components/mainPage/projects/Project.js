import React from "react";
import "./Project.css";

const Project = ({ name, img, description, techUsed, isOpen, openProject, closeProject, id, openProjects }) => {



  return (
    <div>
      {!openProjects.includes(id) ? (
        <div className="project-card" onClick={() => openProject(id)}>
          <div className="card-overlay">
            <img src={img} alt={name} width="100%" title={name} />
          </div>
        </div>
      ) : (
        <div className="project-popup">
          <h3>{name}</h3>
          <img src={img} alt={name} title={name} />
          <p>{description}</p>
          <br />
          <p>
            <span>Tech Used</span>: {techUsed}
          </p>
          <button className="--btn" onClick={closeProject} title="Close">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Project;
