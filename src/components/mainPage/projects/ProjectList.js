"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Project_1 = require("./Project");
var DesignProject_1 = require("../design/DesignProject");
require("./ProjectList.css");
var project_data_1 = require("./project-data");
var design_project_data_1 = require("../design/design-project-data");
var SeeMoreBtn_1 = require("../SeeMoreBtn");
var ProjectList = function (_a) {
    var scrollToAbout = _a.scrollToAbout;
    var projects = (0, react_1.useState)(project_data_1.projectsData)[0];
    var _b = (0, react_1.useState)(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = (0, react_1.useState)([]), openProjects = _c[0], setOpenProjects = _c[1];
    var openProject = function (id) {
        if (openProjects.length === 0) {
            setOpenProjects(__spreadArray(__spreadArray([], openProjects, true), [id], false));
            setIsOpen(true);
        }
    };
    var closeProject = function (id) {
        if (openProjects.length > 0) {
            setIsOpen(false);
            setOpenProjects([]);
        }
    };
    return (<div className="project-list">
      <h2>Projects</h2>
      <p>
        Here are some of the projects that I have made. Click on them to find
        out more.
      </p>
        <SeeMoreBtn_1.default scrollToAbout={scrollToAbout}/>
        <div className="projects-box">
        <h3>Development Projects</h3>
      <div className="projects">
        {projects.map(function (project) {
            return <Project_1.default key={project.id} name={project.name} images={project.images} description={project.description} techUsed={project.techUsed} id={project.id} isOpen={isOpen} openProject={openProject} closeProject={closeProject} openProjects={openProjects}/>;
        })}
      </div>
      </div>
      <div className="projects-box">
        <h3>DesignProjects</h3>
      <div className="projects">
        {design_project_data_1.designProjects.map(function (project) {
            return <DesignProject_1.default key={project.id} name={project.name} images={project.images} description={project.description} techUsed={project.techUsed} id={project.id} isOpen={isOpen} openProject={openProject} closeProject={closeProject} openProjects={openProjects}/>;
        })}
      </div>
      </div>
    </div>);
};
exports.default = ProjectList;
