import React from 'react'
import { MessageContainer, MessagesList } from './style'
import { AiOutlineUser } from 'react-icons/ai'


const SentMessage = ({text}) => {
  return (
    <MessageContainer>
      <div>
        <span><AiOutlineUser/></span><p id='chat-input'>{text}</p>
      </div>
    </MessageContainer>
  )
}

const ChatMessages = (chat) => {
  return (
    <MessagesList>
      {chat.messages.map((message, index) => (
        <SentMessage key={index} text={message.text}/>
      ))}
    </MessagesList>
  )
}

export default ChatMessages