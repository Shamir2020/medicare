import { connectDB } from "@/libs/mongodb";
import Blog from "@/models/BlogModel";
import { NextResponse } from "next/server";



export async function GET (request, { params }) {
    try {
        const { id } = params 

        const blog = await Blog.findById(id)

        if (!blog){
            return NextResponse.json({error: 'Blog was not found'}, {status: 404})
        }


        return NextResponse.json({blog: blog}, {status: 200})

    }
    catch (error) {
        console.log(error.message)
        return NextResponse.json({error: 'Blog was not found'}, {status: 404})
    }
}