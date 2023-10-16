import React, { FC } from 'react'
import './SeeMoreBtn.css'

interface Props {
  scrollToAbout: React.MouseEventHandler<HTMLButtonElement>;
}

const SeeMoreBtn: FC<Props> = ({scrollToAbout}) => {
  return (
    <button className='--btn see-more-btn' onClick={scrollToAbout} title="More info">ABOUT ME</button>
  )
}

export default SeeMoreBtn
