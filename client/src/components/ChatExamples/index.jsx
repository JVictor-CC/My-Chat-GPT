import React from 'react'
import { ChatExample, Examples, Icon } from './style'
import { BsSun } from 'react-icons/bs'
import { IoWarningOutline } from 'react-icons/io5'
import { AiOutlineThunderbolt } from 'react-icons/ai'

const ChatExamples = ({setInputValue}) => {
  return (
    <ChatExample>
        <Examples>
            <div>
                <Icon><BsSun/></Icon>
                <h1>Examples</h1>
                <p style={{cursor: 'pointer'}} onClick={(e) => setInputValue(e.target.textContent)}>"Explain quantum computing in simple terms"</p>
                <p style={{cursor: 'pointer'}} onClick={(e) => setInputValue(e.target.textContent)}>"Got any creative ideas for a 10 year old's birthday"</p>
                <p style={{cursor: 'pointer'}} onClick={(e) => setInputValue(e.target.textContent)}>"How do I make an http request in javascript"</p>
            </div>
            <div>
                <Icon><AiOutlineThunderbolt/></Icon>
                <h1>Capabilities</h1>
                <p>Remembers what user said earlier in the conversation</p>
                <p>Allows user to provide follow-up corrections</p>
                <p>Trained to decline inappropriate requests</p>
            </div>
            <div>
                <Icon><IoWarningOutline/></Icon>
                <h1>Limitations</h1>
                <p>May occasionally generate incorrect information</p>
                <p>May occasionally produce harmful instructions or biased content</p>
                <p>Limited knowledge of world and events after 2021</p>
            </div>
        </Examples>
    </ChatExample>
  )
}

export default ChatExamples