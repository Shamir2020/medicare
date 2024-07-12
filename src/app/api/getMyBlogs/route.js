import { connectDB } from "@/libs/mongodb";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import Blog from "@/models/BlogModel";


connectDB()


export async function GET (request){
    try {
        const token = request.cookies.get('token').value
        const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN)

        const id = decodedToken.id

        const blogs = await Blog.find({owner: id})

        return NextResponse.json({blogs: blogs}, {status: 200})

        
    }
    catch(error){
        return NextResponse.json({error:error.message}, {status: 500})
    }
}

