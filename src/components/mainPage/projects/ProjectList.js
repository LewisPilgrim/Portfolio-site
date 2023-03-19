import React, { useState } from "react";
import Project from "./Project";
import './ProjectList.css';
import { projectsData } from "./project-data";

const ProjectList = () => {
  const [projects] = useState(projectsData);

  return (
    <div className="project-list">
      <h2>Projects</h2>
      <p>
        Here are some of the projects that I have made, click on them to find
        out more.
      </p>
      <div className="projects">
        {projects.map((project) => {
          return <Project key={project.id} name={project.name} img={project.img} description={project.description} techUsed={project.techUsed} />
        })}
      </div>
    </div>
  );
};

export default ProjectList;
