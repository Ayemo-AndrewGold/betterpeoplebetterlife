import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>"Unlock Your Dreams: Get Up to ₦1,000,000 Loan in 24 Hours!"</h1>
            <p>
             Unlock your business potential! Our microfinance loans offer up to ₦1,000,000 in 24 hours, 
             no collateral required. Apply now and start building the future you deserve!
            </p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero