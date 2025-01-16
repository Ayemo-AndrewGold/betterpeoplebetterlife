import React from 'react'
import  './Programs.css'
import program_1 from '../../assets/pro4.jpg'
import program_2 from '../../assets/pro5.jpg'
import program_3 from '../../assets/pro6.jpg'
import program_icon1 from '../../assets/bank1.png'
import program_icon2 from '../../assets/bank2.png'
import program_icon3 from '../../assets/bank3.png'
const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program_1} alt="" />
            <div className='caption'>
                <img src={program_icon1} alt="" />
                <p>Deposite</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="" />
            <div className='caption'>
                <img src={program_icon2} alt="" />
                <p>Take Loan</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt="" />
            <div className='caption'>
                <img src={program_icon3} alt="" />
                <p>Credit</p>
            </div>
        </div>
    </div>
  )
}

export default Programs