import React from 'react'
import './Contact.css'
import Chat_item_list from './Chat/Chat-item-list'

const Contact = () => {
  return (
    <div className='style-contact'>
        <div className='header-contact'>
            <h1>All chats</h1>
        </div>
        <div className='contact'>
            <Chat_item_list/>
            <Chat_item_list/>
            <Chat_item_list/>
            <Chat_item_list/>
            <Chat_item_list/>
            <Chat_item_list/>
            <Chat_item_list/>
            <Chat_item_list/>
            <Chat_item_list/>
        </div>
        <div className='chat'>
        </div>
    </div>
  )
}

export default Contact