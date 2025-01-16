import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next_icon.png'
import back_icon from '../../assets/back_icon.png'
import user1 from '../../assets/user2.jpg'
import user2 from '../../assets/user5.jpg'
import user3 from '../../assets/user5.jpg'
import user4 from '../../assets/user2.jpg'


const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward =()=>{
        if(tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward =()=>{
        if(tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>    
                    <div className="slide">
                      <div className="user-info">
                      <img src={user2} alt="" />
                        <div>
                            <h3>Kofi A., Farmer</h3>
                            <span>CityLight PLC, USA</span>
                        </div>
                      </div>
                      <p>
                    As a farmer, I needed financing to purchase new equipment and expand my farm. 
                    BetterLife Bank provided me with a loan that met my needs, and their repayment 
                    terms were flexible and affordable. I've seen a significant increase in my yields 
                    and profits, thanks to their support
                    </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user1} alt="" />
                            <div>
                                <h3>Marathana Moragan, Venture Capitalist</h3>
                                <span>CityLight PLC, USA</span>
                            </div>
                        </div>
                        <p>
                            BetterLife Bank has been a game-changer for my small business. 
                            Their quick loan processing and flexible repayment terms have 
                            helped me expand my operations and increase my revenue. I highly recommend 
                            them to any entrepreneur looking for financial support
                        </p>
                    </div>
                </li>
              
                <li>
                    <div className="slide">
                       <div className="user-info">
                            <img src={user3} alt="" />
                            <div>
                                <h3>David brooks, Investor</h3>
                                <span>CityLight PLC, USA</span>
                            </div>
                       </div>
                        <p>
                    I was struggling to make ends meet, but BetterLife's microfinance loan helped
                     me get back on my feet. The application process was easy, and the staff were 
                     friendly and supportive. I'm grateful for their help and would definitely recommend 
                     them to others
                    </p>
                    </div>
                </li>
                
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user4} alt="" />
                            <div>
                                <h3>Aisha M., Entrepreneur</h3>
                                <span>CityLight PLC, USA</span>
                            </div>
                        </div>
                        <p>
                    I've tried other microfinance institutions before, but BetterLife Bank is by far the best. 
                    Their interest rates are competitive, and their customer service is top-notch. 
                    I've already referred several friends and family members to them, and I'll continue to do 
                    so
                    </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials