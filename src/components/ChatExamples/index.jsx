import React from 'react'
import { ChatExample, Examples } from './style'

const ChatExamples = () => {
  return (
    <ChatExample>
        <Examples>
            <div>
                <h1>Examples</h1>
                <p>"Explain quantum computing in simple terms"</p>
                <p>"Got any creative ideas for a 10 year old's birthday"</p>
                <p>"How do I make an http request in javascript"</p>
            </div>
            <div>
                <h1>Capabilities</h1>
                <p>Remembers what user said earlier in the conversation</p>
                <p>Allows user to provide follow-up corrections</p>
                <p>Trained to decline inappropriate requests</p>
            </div>
            <div>
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