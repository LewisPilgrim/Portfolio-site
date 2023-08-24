import React from 'react'
import './LandingPage.css'

const Header = ({ enterSite }) => {
  return (
    <div className="hero"> 
    <header>
        <h1>Hi,<br /> I'm <span>Lewis Pilgrim</span></h1>
        <h2>Front-End Developer</h2>
        <button className='--btn' onClick={enterSite} title="Enter Site">Enter Site</button>
    </header>
  <div className="cube"></div>
  <div className="cube"></div>
  <div className="cube"></div>
  <div className="cube"></div>
  <div className="cube"></div>
  <div className="cube"></div>
</div>
  )
}

export default Header
