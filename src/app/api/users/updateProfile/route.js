import { connectDB } from "@/libs/mongodb";
import Profile from "@/models/ProfileModel";
import { NextResponse } from "next/server";


connectDB()

export async function POST (request){
    try{
        const req = await request.json()

        console.log(req.address)

        const profile = await Profile.findByIdAndUpdate({_id: req.profile}, {
            birthDate: req.birthDate,
            gender: req.gender,
            phone: req.contact,
            address: req.address,
            eContact: req.eContact,
            bloodGroup: req.bloodGroup
        })

        return NextResponse.json({
            message: 'Profile updated successfully !'
        }, {status: 200})

    }
    catch(error){
        console.log(error.message)
        return NextResponse.json({error: error.message}, {status: 404})
    }
}