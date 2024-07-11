import mongoose from 'mongoose'


export async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to MongoDB')
    }
    catch(error){
        console.log('Could not connect to DB')
        console.log(error)
    }
}

