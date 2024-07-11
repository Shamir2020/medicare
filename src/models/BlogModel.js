import mongoose from "mongoose"

const BlogSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    content:{
        type: String,
        required: true
    },
    image: {
        type: String
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
})

const Blog = mongoose.models.blogs || mongoose.model('blogs', BlogSchema)

export default Blog