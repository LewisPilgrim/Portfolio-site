import React from "react";
import About from "./About";
import ProjectList from "./projects/ProjectList";
import "./MainPage.css";
<<<<<<< HEAD
import SeeMoreBtn from "./SeeMoreBtn";
import ScrollBtn from "./ScrollBtn";
import { AiFillLinkedin, AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import CaseStudy from "./CaseStudy";
=======
import ScrollBtn from "./ScrollBtn";
import { AiFillLinkedin, AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
>>>>>>> 682b09842ff6531a0233276f472d7cc121b0fbc4

const MainPage = () => {
  const aboutRef = React.createRef();
  const topRef = React.createRef();
<<<<<<< HEAD
  const caseStudyRef = React.createRef()

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
=======

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
>>>>>>> 682b09842ff6531a0233276f472d7cc121b0fbc4
  };

  return (
    <div className="page-window" ref={topRef}>
      <div className="project-section">
<<<<<<< HEAD
        <ProjectList />
        <SeeMoreBtn scrollToAbout={scrollToAbout} />
=======
        <ProjectList scrollToAbout={scrollToAbout} />
>>>>>>> 682b09842ff6531a0233276f472d7cc121b0fbc4
        <hr />
      </div>
      <div ref={aboutRef}></div>
      <About />
      <hr />
<<<<<<< HEAD
      <div className="page-window" ref={caseStudyRef}>
        <CaseStudy />
      </div>
      <hr />
      <div className="contact">
        <h2>Contact me</h2>
        <span>
          <MdEmail color="#2f4f4f" size={19} title="Email" />
          <h4>lewis.pilgrim0@hotmail.co.uk</h4>
        </span>
        <span>
          <AiFillPhone color="#2f4f4f" size={19} title="Phone" />
          <h4>07975 888183</h4>
        </span>
        <span>
          <AiFillLinkedin color="#2f4f4f" size={19} title="LinkedIn" />
          <h4>https://www.linkedin.com/in/lewis-pilgrim-73ab08236/</h4>
=======
      <div className="contact">
        <h2>Contact me</h2>
        <span>
          <MdEmail color="#2f4f4f" size={19} title="Email" id="icon" />
          <h4>
            <a href="mailto:lewis.pilgrim0@hotmail.co.uk">
              lewis.pilgrim0@hotmail.co.uk
            </a>
          </h4>
        </span>
        <span>
          <AiFillPhone color="#2f4f4f" size={19} title="Phone" id="icon" />
          <h4>07975 888183</h4>
        </span>
        <span>
          <AiFillLinkedin
            color="#2f4f4f"
            size={19}
            title="LinkedIn"
            id="icon"
          />
          <h4>
            <a href="https://www.linkedin.com/in/lewis-pilgrim-73ab08236/">
              LinkedIn/lewis-pilgrim-73ab08236/
            </a>
          </h4>
>>>>>>> 682b09842ff6531a0233276f472d7cc121b0fbc4
        </span>
      </div>
      <ScrollBtn scrollToTop={scrollToTop} />
      <footer>
        <p>
          Made by{" "}
<<<<<<< HEAD
          <a href="https://www.linkedin.com/in/lewis-pilgrim-73ab08236/" title="Lewis' LinkedIn">
=======
          <a
            href="https://www.linkedin.com/in/lewis-pilgrim-73ab08236/"
            title="Lewis' LinkedIn"
          >
>>>>>>> 682b09842ff6531a0233276f472d7cc121b0fbc4
            Lewis Pilgrim
          </a>{" "}
          2023
        </p>
      </footer>
    </div>
  );
};

export default MainPage;
