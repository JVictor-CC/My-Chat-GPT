import React from 'react'
import { MessageContainer } from './style'
import { AiOutlineUser } from 'react-icons/ai'
import { DiAtom } from 'react-icons/di'

const MessageBox = ({ text, type = '' }) => {
  return (
    <MessageContainer variant={type}>
      <div>
        {type === 'user' ? (
          <>
            <p>{text}</p>
            <span>
              <AiOutlineUser />
            </span>
          </>
        ) : (
          <>
            <span>
              <DiAtom />
            </span>
            <p>{text}</p>
          </>
        )}
      </div>
    </MessageContainer>
  )
}

const ChatMessages = (chat) => {
  return (
    <div>
      {chat.messages.map((message, index) => (
        <MessageBox key={index} text={message.text} type={message.sender} />
      ))}
    </div>
  )
}

export default ChatMessages
