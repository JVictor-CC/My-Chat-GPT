import React, { useState } from 'react'
import { Container, ChatContainer, MenuBar, History, Options, ChatAnswers, ChatInput } from './style'
import ChatExamples from '../../components/ChatExamples'
import { AiOutlineUser, AiOutlinePlus, AiOutlineDelete, AiOutlineLogout, AiOutlineSetting, AiOutlineMessage, AiOutlineSend } from 'react-icons/ai'
import Button from '../../components/Button'
import ChatMessages from '../../components/ChatMessages'
import { useNavigate } from 'react-router-dom'


function autoResize(event) {
  if (event.target.scrollHeight < '130') {
    event.target.style.height = 'auto';
    event.target.style.height = (event.target.scrollHeight-10) + 'px';
  }
}

function scrollOnSend() {
  const scroll = document.getElementById('answers')
  setTimeout(() => {
    scroll.scrollTop = scroll.scrollHeight
  }, 100)
}

const Chat = () => {

  const navigate = useNavigate()

  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState([])
  const [chatId, setChatId] = useState(0)

  function createChat(){
    if(messages.length === 0) {
      setChatId(chatId + 1)
    }
  }

  function handleInput() {
    if(inputValue.length !== 0){
      createChat()
      const newMessage = { text: inputValue, type: 'send' }
      setMessages([...messages, newMessage])
      setInputValue('')
      scrollOnSend()
    } 
  }

  function clearScreen() {
    setMessages([])
  }

  function clearConversations() {
    setChatId(0)
    clearScreen()
  }

  function handleLogout() {
    navigate('/')
  }

  return (
    <Container>
      <MenuBar>
        <History>
          <Button onClick={clearScreen} variant={'newchat'} title={'New Chat'} leftIcon={<AiOutlinePlus/>}/>
          <br />
          {chatId !==0 ? 
            Array(chatId).fill(null).map((_, index) => (
                <Button key={index} leftIcon={<AiOutlineMessage/>} title={`Chat ${index + 1}`}/>
              ))
          :
            null
          }
        </History>
        <Options>
          <Button onClick={clearConversations} title={'Clear conversations'} leftIcon={<AiOutlineDelete/>}/>
          <Button title={'Upgrade to Plus'} leftIcon={<AiOutlineUser/>}/>
          <Button title={'Settings'} leftIcon={<AiOutlineSetting/>}/>
          <Button title={'Log out'} onClick={handleLogout} leftIcon={<AiOutlineLogout/>}/>
        </Options>
      </MenuBar>
      <ChatContainer>
        <ChatAnswers id='answers'>
          {messages.length !== 0 ? 
            <ChatMessages messages={messages}/>
          :
            <ChatExamples setInputValue={setInputValue}/>
          }
        </ChatAnswers>
        <ChatInput>
          <div>
            <textarea value={inputValue} onChange={(e) => setInputValue(e.target.value)} onInput={autoResize} placeholder='Send Message...'></textarea>
            <Button onClick={handleInput} variant={'sendbutton'} title={'Send'} leftIcon={<AiOutlineSend/>}/>
          </div>
        </ChatInput>
      </ChatContainer>
    </Container>
  )
}

export default Chat