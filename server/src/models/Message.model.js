import mongoose from 'mongoose'

const Schema = mongoose.Schema

const MessageSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  sender: String,
})

//const Chat = mongoose.model('chat', ChatSchema)

export default MessageSchema
