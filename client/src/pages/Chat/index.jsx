import React, { useEffect, useState } from 'react'
import { Container, ChatContainer, MenuBar, History, Options, ChatAnswers, ChatInput } from './style'
import ChatExamples from '../../components/ChatExamples'
import { AiOutlineUser, AiOutlinePlus, AiOutlineDelete, AiOutlineLogout, AiOutlineSetting, AiOutlineMessage, AiOutlineSend } from 'react-icons/ai'
import Button from '../../components/Button'
import ChatMessages from '../../components/ChatMessages'
import { useNavigate } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import { createChat, deleteAllChats, loadChats, sendMessage } from '../../services/chat'


function autoResize(event) {
  if (event.target.scrollHeight < '130') {
    event.target.style.height = 'auto'
    event.target.style.height = (event.target.scrollHeight-10) + 'px'
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
  const [chats, setChats] = useState([])
  const [chatCount, setChatCount] = useState(0)
  const [selectedChat, setSelectedChat] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('userToken')
    loadChats(token)
    .then(data => {
      setChats(data)
      setChatCount(data.length)
    })
}, [])

  async function handleInput() {
    if(inputValue.length !== 0){
      try{
        const token = localStorage.getItem('userToken')
        setLoading(true)
        const newMessage = { text: inputValue, sender: 'user' }
        setMessages([...messages, newMessage])
        setInputValue('')
        scrollOnSend()
        const response = await sendMessage(token, newMessage, selectedChat)
        console.log(response)
        const responseMessage = {text: response.data.data, sender: 'fake-gpt'}
        setMessages([...messages, newMessage, responseMessage])
        scrollOnSend()
      }catch (error) {
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

  function clearConversations() {
    const token = localStorage.getItem('userToken')
    console.log(token)
    deleteAllChats(token).then(()=>
    setChatCount(0))
    clearScreen()
  }

  function handleLogout() {
    localStorage.clear()
    navigate('/')
  }

  return (
    <Container>
      <MenuBar>
        <History>
          <Button onClick={() => {clearScreen(); const token = localStorage.getItem('userToken'); createChat(token, `Chat ${chatCount}`).then(data => {setChats(data); setChatCount(data.length)})}} variant={'newchat'} title={'New Chat'} leftIcon={<AiOutlinePlus/>}/>
          <br />
          { chats && chats.length !==0 ? 
            chats.map((chat, index) => (
              <Button key={index} leftIcon={<AiOutlineMessage/>} title={`${chat.title}`} onClick={() => {
                loadMessages(chat); 
                setSelectedChat(index); 
                const token = localStorage.getItem('userToken')
                loadChats(token)
                .then(data => {
                  setChats(data)
                })
              }}/>
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
            {loading ? <Button isValid={!loading} variant={'sendbutton'} title={<Spinner style={{fontSize: '32px'}} animation="border" variant="light" />}/>  : <Button onClick={handleInput} variant={'sendbutton'} title={'Send'} leftIcon={<AiOutlineSend/>}/> }
          </div>
        </ChatInput>
      </ChatContainer>
    </Container>
  )
}

export default Chat