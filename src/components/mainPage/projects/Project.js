<<<<<<< HEAD
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
=======
import React from "react";
import "./Project.css";
import Carousel from "../carousel/Carousel";

const Project = ({ name, images, description, techUsed, isOpen, openProject, closeProject, id, openProjects }) => {

console.log(images);

  return (
    <div>
      {!openProjects.includes(id) ? (
        <div className="project-card" onClick={() => openProject(id)}>
          <div className="card-overlay">
            <img src={images[0]} alt={name} width="100%" title={name} />
>>>>>>> 682b09842ff6531a0233276f472d7cc121b0fbc4
          </div>
        </div>
      ) : (
        <div className="project-popup">
          <h3>{name}</h3>
<<<<<<< HEAD
          <img src={img} alt={name} title={name} />
          <p>{description}</p>
          <br />
          <p><span>Tech Used</span>: {techUsed}</p>
          <button className="--btn" onClick={toggleOpen} title="Close">
=======
          <Carousel carouselItems={images} alt={name} title={name} />
          <br />
          <p>{description}</p>
          <br />
          <p>
            <span>Tech Used</span>: {techUsed}
          </p>
          <button className="--btn" onClick={closeProject} title="Close">
>>>>>>> 682b09842ff6531a0233276f472d7cc121b0fbc4
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Project;
