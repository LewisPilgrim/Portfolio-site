import React, { useState } from "react";
import "./Project.css";

const Project = ({ name, img, description, techUsed }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen === true ? (
        <div className="project-card" onClick={toggleOpen}>
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
          <p><span>Tech Used</span>: {techUsed}</p>
          <button className="--btn" onClick={toggleOpen} title="Close">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Project;
