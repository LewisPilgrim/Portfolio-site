import React from "react";
import About from "./About";
import ProjectList from "./projects/ProjectList.tsx";
import "./MainPage.css";
import ScrollBtn from "./ScrollBtn.tsx";
import { AiFillLinkedin, AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import CaseStudy from "./CaseStudy";
import SeeMoreBtn from "./SeeMoreBtn.tsx";


const MainPage = () => {
  const aboutRef = React.createRef();
  const topRef = React.createRef();
  const caseStudyRef = React.createRef()

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page-window" ref={topRef}>
      <div className="project-section">
        <ProjectList scrollToAbout={scrollToAbout} />
        <SeeMoreBtn scrollToAbout={scrollToAbout} />
        <hr />
      </div>
      <div ref={aboutRef}></div>
      <About />
      <hr />
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
        </span>
      </div>
      <ScrollBtn scrollToTop={scrollToTop} />
      <footer>
        <p>
          Made by{" "}
          <a href="https://www.linkedin.com/in/lewis-pilgrim-73ab08236/" title="Lewis' LinkedIn">
            Lewis Pilgrim
          </a>{" "}
          2023
        </p>
      </footer>
    </div>
  );
};

export default MainPage;
