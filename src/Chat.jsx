import React from 'react'
import './Chat.css'
import attach from './assets/img/attach.svg'
import forward from './assets/img/forward.svg'
import Time from './components/Time'
import Message from './components/Message'
import Time2 from './components/Time2'
import Message2 from './components/Message2'

const Chat = () => {
  return (
    <div className='style-chat'>
        <div className='message'>
            <div className='data'>
                <p>11.02.2021</p>
            </div>
            <div className='message-1'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit and more than you know Second line of the message</p>
                <Time/>
            </div>
            <Message/>
            <div className='message-1'>
                <p>Hey man. New movie is excelent</p>
                <Time/>
            </div>
            <div className='data'>
                <p>12.02.2021</p>
            </div>
            <div className='new'>
                <p>Новые сообщения</p>
            </div>
            <Message2/>
        </div>
        <div className='send-message'>
            <input type='text' placeholder='Type messsage'></input>
            <div className='send'>
                <div className='attach'>
                    <img src={attach}/>
                </div>
                <img src={forward}/>
            </div>
        </div>

    </div>
  )
}

export default Chat