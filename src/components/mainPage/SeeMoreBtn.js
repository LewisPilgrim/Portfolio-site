import React from 'react'
import './SeeMoreBtn.css'

const SeeMoreBtn = ({scrollToAbout}) => {
  return (
    <button className='--btn see-more-btn' onClick={scrollToAbout} title="More info">ABOUT ME</button>
  )
}

export default SeeMoreBtn
