import { connectDB } from "@/libs/mongodb";
import User from "@/models/UserModel";
import { NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

connectDB()

export async function POST (request) {

    const req = await request.json()

    const username = req.username
    const password = req.password 

    console.log(username)
    console.log(password)

    const user = await User.findOne({username: username})

    if (!user) {
        return NextResponse.json({error: 'Invalid Username !'}, {status: 404})
    }

    const validPassword = await bcryptjs.compare(password, user.password)

    if (!validPassword) {
        return NextResponse.json({error: 'Wrong password !'}, {status: 404})
    }
    // Create an assign a token

    const tokenData = {
        id: user._id,
        username: user.username,
        email: user.email, 
        name: user.name,
        role: user.role
    }

    const token = await jwt.sign(tokenData, process.env.SECRET_TOKEN, {expiresIn: '300h'})

    const response = NextResponse.json({message: 'Login successful !', success: true})
    
    response.cookies.set("token", token, {
        httpOnly: true
    })

    return response
}