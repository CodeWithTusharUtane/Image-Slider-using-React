import React, { useState } from 'react'
import { slider } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './App.css';


const App = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current===length -1 ? 0 : current + 1)
    }

    const previousSlide = () => {
        setCurrent(current===0 ? length-1 : current - 1)
    }
  return (
    <>
    <div className='container'>
    <h1 className='heading'>My Favorite Indian Hip-Hop Artists</h1>
        
       <FaArrowAltCircleLeft className='left-arrow' onClick={previousSlide}/> 
       <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/> 
        {
            slider.map((slide, index)=>{
                return(
                    <div className={index===current?'slide-active':'slide'}
                        key={index}
                    >
                        {
                            index===current && (
                                <img src={slide.image} alt="Rappers images" className='image'/>
                            )
                        }

                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default App