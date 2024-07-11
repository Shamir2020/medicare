import { existsSync } from "fs";
import { readdir, unlink, writeFile } from "fs/promises";
import path from 'path'


import { connectDB } from "@/libs/mongodb";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import Blog from "@/models/BlogModel";

connectDB()

export async function POST (request){
    try {

        

        const req = await request.formData()

        console.log(req)
        console.log(req.get('content'))

        const image = req.get("image")

        const byteLength = await image.arrayBuffer();

        const bufferData = Buffer.from(byteLength);


        const pathOfImage = `./public/images/${new Date().getTime()}${path.extname(image.name)}`

        const imagePath = pathOfImage.substring(8)

        await writeFile(pathOfImage,bufferData)

        



        const token = request.cookies.get('token')?.value || ''

        const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN)

        const role = decodedToken.role 
        const id = decodedToken.id

        console.log(role)

        if (!['doctor', 'admin'].includes(role)){
            return NextResponse.json({error: 'Not authorized'}, {status: 404})
        }

        const blog = await Blog.create({
            title: req.get('title'),
            content: req.get('content'),
            image: imagePath,
            owner: id
        })

        return NextResponse.json({message: 'Blog created successfully'}, {status: 200})

    }
    catch(error){
        console.log(error.message)
        return NextResponse.json({error: 'Blog could not be created'}, {status: 500})
    }
}