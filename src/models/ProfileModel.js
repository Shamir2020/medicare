import mongoose from 'mongoose'


const ProfileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    birthDate:{
        type: String
    },
    gender: {
        type: String,
        enum: ['male','female','other']
    },
    bloodGroup: {
        type: String,
    },
    eContact: {
        type: String
    },
    address: {
        type: String
    }
    
}, {timestamps: true})

const Profile = mongoose.models.profiles || mongoose.model('profiles', ProfileSchema)

export default Profile