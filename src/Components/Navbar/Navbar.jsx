import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/AndrewGold-.jpg'

const Navbar = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(()=> {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Testimonial</li>
            <li><button className='btn'>Account</button></li>
        </ul>

    </nav>
  )
}

export default Navbar