import React from 'react'
import './About.css'
import about_img from '../../assets/team1.jpg'
import play_icon from '../../assets/play_icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt=""className='about_img' />
            <img src={play_icon} alt="" className='play_icon' onClick={()=>{setPlayState(true)}} />
        </div>
        <div className="about-right">
            <h2>ABout Bank</h2>
            <h3>Making life easy for businesses to strive</h3>
            <p>At BetterLife, we're dedicated to empowering individuals and small businesses to achieve 
                financial stability and success. As a leading microfinance institution, we provide accessible, 
                affordable, and innovative financial solutions to bridge the gap between economic potential 
                and opportunity. Our mission is to foster financial inclusion, drive economic growth, 
                and improve the lives of our customers and communities we serve.</p>
                <p>At BetterLife, we're dedicated to empowering individuals and small businesses to achieve 
                financial stability and success. As a leading microfinance institution, we provide accessible, 
                affordable, and innovative financial solutions to bridge the gap between economic potential 
                and opportunity. Our mission is to foster financial inclusion, drive economic growth, 
                and improve the lives of our customers and communities we serve.</p>
                <p>At BetterLife, we're dedicated to empowering individuals and small businesses to achieve 
                financial stability and success. As a leading microfinance institution, we provide accessible, 
                affordable, and innovative financial solutions to bridge the gap between economic potential 
                and opportunity. Our mission is to foster financial inclusion, drive economic growth, 
                and improve the lives of our customers and communities we serve.</p>
        </div>
    </div>
  )
}

export default About