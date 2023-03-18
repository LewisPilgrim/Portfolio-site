import React from 'react'
import './SeeMoreBtn.css'

const SeeMoreBtn = ({scrollToAbout}) => {
  return (
    <button className='--btn see-more-btn' onClick={scrollToAbout} title="More info">MORE INFO</button>
  )
}

export default SeeMoreBtn
