import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true 
    },
    verified: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ['admin','patient','doctor'],
        default: 'patient'
    },
    profileId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'profiles'
    }

    
}, { timestamps: true })


const User = mongoose.models.users || mongoose.model('users', UserSchema)

export default User