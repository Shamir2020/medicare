import { connectDB } from "@/libs/mongodb";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import Blog from "@/models/BlogModel";

connectDB()

export async function POST (request){
    try {
        const req = await request.json()

        const token = request.cookies.get('token')

        const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN)

        const role = decodedToken.role 
        const id = decodedToken.id

        if (!['doctor', 'admin'].includes(role)){
            return NextResponse.json({error: 'Not authorized'}, {status: 404})
        }

        const blog = await Blog.create({
            title: req.title,
            content: req.content,
            image: req.image,
            owner: req.owner
        })

        return NextResponse.json({message: 'Blog created successfully'}, {status: 200})

    }
    catch(error){
        return NextResponse.json({error: 'Blog could not be created'}, {status: 404})
    }
}