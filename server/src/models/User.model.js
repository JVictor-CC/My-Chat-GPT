import mongoose from 'mongoose'
import ChatSchema from './Chat.model.js'

const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Pelase enter a Username'],
        unique: false
    },
    email: {
        type: String,
        required: [true, 'Pelase enter an Email'],
        unique: [true, 'Pelase enter a unique Email']
    },
    password: {
        type: String,
        required: [true, 'Pelase enter a Password'],
        unique: false
    },
    chats: [ChatSchema]
})

const User = mongoose.model('user', UserSchema)

export default User