import mongoose from 'mongoose'

const connectToDB = async (uri) => {
    try {
        const db = await mongoose.connect(uri);
        console.log('MongoDB connected!');
    } catch (error) {
        console.log('Could not connect to the database!');
    }
}

export default connectToDB