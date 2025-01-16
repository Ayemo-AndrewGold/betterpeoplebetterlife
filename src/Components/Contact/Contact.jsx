import React from 'react'
import './Contact.css'
import message_icon from '../../assets/message-icon.png'
import email_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import arrow_icon from '../../assets/dark-arrow.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={message_icon} alt="" /></h3>
            <p>Feel free to reach out through form or find our contact information below. Your feedback,
                Questions and suggestions are important to us as we strive to provide eceptional service 
                to our service community. 
            </p>
            <ul>
                <li><img src={email_icon} alt="" />ayemoandrewgold@gmail.com  </li>
                <li><img src={phone_icon} alt="" />+234 8124106188  </li>
                <li><img src={location_icon} alt="" />44, Damingoro street, Mushin <br /> Lagos, Nigeria  </li>
            </ul>
        </div>
        <div className="contact-col">
            <form>
              <label>Your name</label>
              <input type="text" name='name' placeholder='Enter your name' required />
              <label>Phone Number</label>
              <input type="tel" name='phone' placeholder='Enter your mobile nummber' required />
              <label>Write your message here</label>
              <textarea name="message" id="" rows="6" placeholder='Enter your message' required></textarea>
              <button type="submit" className='btn dark-btn'>Submit now <img src={arrow_icon} alt="" /></button>
            </form>
            <span></span>
        </div>
    </div>
  )
}

export default Contact