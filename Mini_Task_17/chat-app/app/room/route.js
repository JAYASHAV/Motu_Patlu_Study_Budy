import User from "@/app/models/user.js"
import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export const GET = async (req)=>{
    const {userId} = await auth()
    console.log(userId)
    if(userId){
        const user = await User.findOne({clerkId: userId}, 'activeRooms')
        return NextResponse.json({activeRooms: user?.activeRooms || []})
    }
    else {
        return NextResponse.json({'message': 'unathorised user!!'})
    }   
}