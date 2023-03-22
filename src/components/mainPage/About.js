import React from 'react'
import './About.css'
import { FaGitAlt, FaNodeJs, FaReact } from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { SiJavascript, SiRedux } from 'react-icons/si'
import { FiFigma } from 'react-icons/fi'
import portrait from '../../Images/portrait.jpg'

const About = () => {
  return (
    <div className='about'>
      <img src={portrait} alt='Lewis' title="Lewis" />
      <div className='about-text'>
      <h2>About me</h2>
      <p>I am a Front-End Developer with a passion for problem solving and visual design and I have a keen eye for detail. I am new to the industry so my focus is on expanding my knowledge and maintaining industry best practice in order to achieve my goal of becoming an expert in the field of Front-End Development. Interactive design, Accessability and UX are key areas of interest for me and I love creating beautiful sites that everyone can enjoy!</p>
      <div className='icons'>
        <AiFillHtml5 color="#2f4f4f" size={25} title="HTML" />
        <DiCss3 color="#2f4f4f" size={25} title="CSS" />
        <SiJavascript color="#2f4f4f" size={23} title="JavaScript" />
        <FaGitAlt color="#2f4f4f" size={27} title="Git" />
        <FaNodeJs color="#2f4f4f" size={25} title="Node" />
        <FiFigma color="#2f4f4f" size={25} title="Figma" />
        <FaReact color="#2f4f4f" size={25} title="React" />
        <SiRedux color="#2f4f4f" size={25} title="Redux" />
      </div>
      </div>
      
    </div>
  )
}

export default About
