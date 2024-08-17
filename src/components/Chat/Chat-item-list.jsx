import React from 'react'
import './Chat_item_list.css'
import chat_img from '../../assets/img/chat-img.jpg'

const Chat_item_list = () => {
  return (
    <div className='style_chat-list'>
      <div className='chat-img'>
        <img src={chat_img} />
      </div>
      <div className='info'>
        <div>       
          <h2>Brooklyn Simmons</h2>
          <p>12:07</p>
        </div>
        <p>Anyways, that’s my two cents plan for </p>
      </div>
    </div>
  )
}

export default Chat_item_list