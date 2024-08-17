import React from 'react'
import './Message.css'
import avatar2 from '../assets/img/avatar2.png'
import Time2 from './Time2'

const Message2 = () => {
  return (
    <div className='style_message2'>
      <div className='avatar-img'>
        <img src={avatar2}/>
      </div>
      <div className='info-name'>    
          <h2>Darrell Steward</h2>
          <div className='text'>
            <p>Good news, the mobile app will be reach 1000K downloads</p>
            <Time2/>
          </div>
      </div>
    </div>
  )
}

export default Message2