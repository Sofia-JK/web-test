import React from 'react'
import './Header.css'
import chat from '../assets/img/Chat.svg'

const Header = () => {
  return (
    <div className='header_style'>  
            <img src={chat} />
            <h1>Great Project</h1>
    </div>
  )
}

export default Header