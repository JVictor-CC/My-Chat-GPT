import mongoose from 'mongoose'
import MessageSchema from './Message.model.js'

const Schema = mongoose.Schema

const ChatSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    messages: [MessageSchema]
})

//const Chat = mongoose.model('chat', ChatSchema)

export default ChatSchema