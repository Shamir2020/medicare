import { connectDB } from "@/libs/mongodb"
import Blog from "@/models/BlogModel"
import { NextResponse } from "next/server"
import jwt from 'jsonwebtoken'


connectDB()



export async function PUT (request, { params }){
    try {   
        const { id } = params

        const req = await request.formData()

        const image = req.get("image")

        const byteLength = await image.arrayBuffer();

        const bufferData = Buffer.from(byteLength);

        const pathOfImage = `./public/images/${new Date().getTime()}${path.extname(image.name)}`

        const imagePath = pathOfImage.substring(8)

        await writeFile(pathOfImage,bufferData)


        const token = request.cookies.get('token')?.value || ''

        const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN)

        const role = decodedToken.role 
        const userId = decodedToken.id

        const blog = await Blog.findById(id)

        console.log(`Blog - ${blog}`)

        if (blog.owner != userId){
            return NextResponse.json({error: 'You are not authorized'}, {status: 404})
        }

        if (!['doctor', 'admin'].includes(role)){
            return NextResponse.json({error: 'Not authorized'}, {status: 404})
        }

        blog.title = req.get('title')
        blog.content = req.get('content')
        blog.image = imagePath
        blog.owner = userId 

        await blog.save()

        return NextResponse.json({message: 'Blog updated successfully'}, {status: 200})

    }
    catch(error){
        console.log(error.message)
        return NextResponse.json({error: 'Blog could not be updated'}, {status: 500})
    }
}

export async function DELETE (request, { params }){
    try {
        const {id} = params

        const blog1 = await Blog.findById(id)

        const token = request.cookies.get('token')?.value || ''

        const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN)

        const userId = decodedToken.id

        if (blog1.owner != userId){
            return NextResponse.json({error: 'You are not authorized'}, {status: 404})
        }

        const blog = await Blog.findByIdAndDelete(id)

        return NextResponse.json({message: 'Blog has been deleted'}, {status: 200})
    }
    catch(error){
        console.log(error.message)
        return NextResponse.json({error: 'Blog could not be deleted !'}, {status: 500})
    }
}