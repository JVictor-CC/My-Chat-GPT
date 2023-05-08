import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Pelase enter a unique Username'],
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
    }
})

const User = mongoose.model('user', UserSchema)

export default User