import { connectDB } from "@/libs/mongodb";
import User from "@/models/UserModel";
import Profile from "@/models/ProfileModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'


connectDB()


export async function POST (request){
    try{
        const req = await request.json()
        const username = req.username
        const password1 = req.password1
        const email = req.email
        const name = req.name 
        const password2 = req.password2
        const phone = req.phone

        console.log(req.birthDate)
        console.log(req.gender)

        if (username == '' || email == '' || name =='' || phone == '' || password1 == '' || password2 == ''){
            return NextResponse.json({error: 'Fill all the fields !'}, {status: 404})
        }

        if (password1 != password2){
            return NextResponse.json({error:'Passwords do not match !'},{status: 404})
        }


        // Check if user already exists !
        
        const emailExists = await User.findOne({email: email})

        if (emailExists) {
            return NextResponse.json({error: 'Email already exists !'},{status: 404})
        }
        const usernameExists = await User.findOne({username: username})

        if (usernameExists){
            return NextResponse.json({error:'User already exists !'}, {status: 400})
        }
        
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password1, salt)

        const user = new User({
            name: name,
            email: email,
            username: username,
            phone: phone,
            password: hashedPassword,
            role: req.role
        })

        const savedUser = await user.save()
        
        const profile = new Profile({
            userId: user._id,
            name: user.name,
            email: user.email,
            phone: req.phone,
            birthDate: req.birthDate,
            gender: req.gender
        })

        const savedProfile = await profile.save()
        
        const user2 = await User.findByIdAndUpdate({_id: user._id}, {profileId: savedProfile._id})

        console.log(user2)

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })

    }
    catch (error){
        console.log(error)
        console.log(error.message)
        return NextResponse.json({error: error.message}, {status: 500})
    }
}