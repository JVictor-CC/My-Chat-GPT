import React from 'react'
import { MessageContainer, MessageStructure } from './style'
import { AiOutlineUser } from 'react-icons/ai'
import { DiAtom } from 'react-icons/di'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const MarkdownRenderer = ({ content }) => {
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
}

const MessageBox = ({ text, type = '' }) => {
  return (
    <MessageContainer variant={type}>
      <div>
        {type === 'user' ? (
          <>
            <span>
              <AiOutlineUser />
            </span>
            <MessageStructure>
              <MarkdownRenderer content={text} />
            </MessageStructure>
          </>
        ) : (
          <>
            <MessageStructure>
              <MarkdownRenderer content={text} />
            </MessageStructure>
            <span>
              <DiAtom />
            </span>
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
