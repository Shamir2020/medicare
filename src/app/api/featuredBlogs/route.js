import { connectDB } from "@/libs/mongodb";
import Blog from "@/models/BlogModel";
import { NextResponse } from "next/server";


connectDB()

export async function GET (request){
    try {
        const blogs = await Blog.find({}).limit(5)

        return NextResponse.json({blogs: blogs}, {status: 200})
    }
    catch (error){
        return NextResponse.json({error: 'Blogs could not be fetched'}, {status: 500})
    }
}