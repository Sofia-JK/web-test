import React from 'react'
import './Time.css'
import read from '../assets/img/read.svg'

const Time = () => {
  return (
    <div className='time-style'>
        <p>21:31</p>
        <img src={read}/>
    </div>
  )
}

export default Time