import React from 'react'
import './Message.css'
import avatar from '../assets/img/avatar.png'
import Time2 from './Time2'

const Message = () => {
  return (
    <div className='style_message2'>
      <div className='avatar-img'>
        <img src={avatar}/>
      </div>
      <div className='info-name'>    
          <h2>Brooklyn Simmons</h2>
          <div className='text'>
            <p>It is my first time like this. Thank you so mush! More then you know. Second line of the message</p>
            <Time2/>
          </div>
          <div className='text'>
            <p>Hello my friend. Lets meet next week</p>
            <Time2/>
          </div>
      </div>
    </div>
  )
}

export default Message