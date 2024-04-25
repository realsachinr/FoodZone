import React from 'react'
import "./HeroSection.css"
import Card from '../Card/Card'
const HeroSection = ({data}) => {
  
  return (
    <div className='herosection-container'>
        <img className='img-back' src="./background.jpg" alt="" />

        <div className='data-container'>
            <Card data={data}/>
        </div>
    </div>
  )
}

export default HeroSection