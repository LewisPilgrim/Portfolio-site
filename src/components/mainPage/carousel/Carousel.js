import React, { useState } from 'react';
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai';
import './Carousel.css';

const Carousel = ({ carouselItems, alt, title }) => {
    const [index, setIndex] = useState(0);

    const handlePrevious = () => {
        return index > 0 ? setIndex(index - 1) : '';
    }

    const handleNext = ()=> {
        return index < carouselItems.length - 1 ? setIndex(index + 1) : '';
    }

  return (
    <>
    <div className='carousel'>
      <button onClick={handlePrevious} className={index ===0 ? "faded" : ''}><AiFillCaretLeft color={index === 0 ? "#888" : "#fff"}/></button>
      <img src={carouselItems[index]} alt={alt} title={title} />
      <button onClick={handleNext} className={index >= carouselItems.length - 1 ? "faded" : ''}><AiFillCaretRight color={index >= carouselItems.length - 1 ? "#888" : "#fff"} /></button>
    </div>
    <div className='current-page'>
        {carouselItems.map((carouselItem) => {
            return (
                <div className={carouselItems.indexOf(carouselItem) === index ? 'dot dot-active' : 'dot'}></div>
            )
        })}
    </div>
    </>
  )
}

export default Carousel
