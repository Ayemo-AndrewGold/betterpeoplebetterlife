import React from 'react'
import './title.css'

const Title = ({subTitle, title}) => {
  return (
    <div className='title'>
        <p>{subTitle}</p>
        <h1>{title}</h1>
    </div>
  )
}

export default Title