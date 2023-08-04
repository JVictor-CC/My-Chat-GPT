import React, { useEffect, useRef, useState } from 'react'
import { Container, ChatContainer, MenuBar, History, Options, ChatAnswers, ChatInput } from './style'
import ChatExamples from '../../components/ChatExamples'
import { AiOutlinePlus, AiOutlineDelete, AiOutlineLogout, AiOutlineSetting, AiOutlineMessage, AiOutlineSend } from 'react-icons/ai'
import Button from '../../components/Button'
import ChatMessages from '../../components/ChatMessages'
import { useNavigate } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import { createChat, deleteAllChats, loadChats, sendMessage } from '../../services/chat'

const Chat = () => {

  const navigate = useNavigate()

  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState([])
  const [chats, setChats] = useState([])
  const [chatCount, setChatCount] = useState(0)
  const [selectedChat, setSelectedChat] = useState()
  const [loading, setLoading] = useState(false)

  const [inputHeight, setInputHeight] = useState('auto')

  const autoScrollRef = useRef(null)

  useEffect(() => {
    const token = localStorage.getItem('userToken')
    loadChats(token)
    .then(data => {
      setChats(data)
      setChatCount(data.length)
    })
  }, [])

  function autoResize(event) {
    if (event.target.scrollHeight < 130 & event.target.scrollHeight >= 60) {
      setInputHeight(`${event.target.scrollHeight}px`)
    }
  }

  function autoScroll() {
    if (autoScrollRef.current) {
      setTimeout(() => {
        autoScrollRef.current.scrollTop = autoScrollRef.current.scrollHeight
      }, 100)
    }
  }

  async function handleInput() {
    if(inputValue.length !== 0){
      try {
        const token = localStorage.getItem('userToken')
        setLoading(true)
        const newMessage = { text: inputValue, sender: 'user' }
        setMessages([...messages, newMessage])
        setInputValue('')
        autoScroll()
        const response = await sendMessage(token, newMessage, selectedChat)
        const responseMessage = {text: response.data.data, sender: 'fake-gpt'}
        setMessages([...messages, newMessage, responseMessage])
        autoScroll()
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    } 
  }

  function loadMessages(chat) {
    setMessages(chat.messages)
  }

  function clearScreen() {
    setMessages([])
  }

  async function clearConversations() {
    const token = localStorage.getItem('userToken')
    await deleteAllChats(token)
    setChatCount(0)
    const data = await loadChats(token)
    setChats(data)
    clearScreen()
  }

  async function handleNewChat () {
    clearScreen()
    const token = localStorage.getItem('userToken')
    const data = await createChat(token, `Chat ${chatCount}`)
    setChats(data)
    setChatCount(data.length)
    setSelectedChat(chatCount)
  }

  async function handleLoadChats (chat, index) {
    loadMessages(chat)
    setSelectedChat(index)
    const token = localStorage.getItem('userToken')
    const data = await loadChats(token)
    setChats(data)
  }

  function handleLogout() {
    localStorage.clear()
    navigate('/')
  }

  return (
    <Container>
      <MenuBar>
        <History>
          <Button onClick={handleNewChat} variant={'newchat'} title={'New Chat'} leftIcon={<AiOutlinePlus/>}/>
          <br />
          { chats && chats.length !== 0 ? 
            chats.map((chat, index) => (
              <Button key={chat._id} active={index === selectedChat} leftIcon={<AiOutlineMessage/>} title={`${chat.title}`} onClick={() => handleLoadChats(chat, index)}/>
          ))
          :
            null
          }
        </History>
        <Options>
          <Button onClick={clearConversations} title={'Clear All Chats'} leftIcon={<AiOutlineDelete/>}/>
          <Button title={'Settings'} leftIcon={<AiOutlineSetting/>}/>
          <Button title={'Log out'} onClick={handleLogout} leftIcon={<AiOutlineLogout/>}/>
        </Options>
      </MenuBar>
      <ChatContainer>
        <ChatAnswers ref={autoScrollRef}>
          {messages.length !== 0 ? 
            <ChatMessages messages={messages}/>
          :
            <ChatExamples presetInputValue={setInputValue}/>
          }
        </ChatAnswers>
        <ChatInput>
          <div>
            <textarea value={inputValue} onChange={(event) => setInputValue(event.target.value)} style={{height: inputHeight}} onInput={autoResize} placeholder='Send Message...'></textarea>
            {loading ? <Button isValid={!loading} variant={'sendbutton'} title={<Spinner style={{fontSize: '32px'}} animation="border" variant="light" />}/>  : <Button onClick={handleInput} variant={'sendbutton'} title={'Send'} leftIcon={<AiOutlineSend/>}/> }
          </div>
        </ChatInput>
      </ChatContainer>
    </Container>
  )
}

export default Chat