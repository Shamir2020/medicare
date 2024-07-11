import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import Profile from "@/models/ProfileModel";
import User from "@/models/UserModel";

export async function GET (request){
    
    try {
        const token = request.cookies.get('token')?.value || ''

        const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN)

        const user = await User.findById(decodedToken.id).select('-password')

        const profile = await Profile.findOne({userId: decodedToken.id})


        return NextResponse.json({
            account: user,
            profile: profile
        }, {status: 200})
    }
    catch (error){
        return NextResponse.json({error: 'Token not found'},{status: 404})
    }


}