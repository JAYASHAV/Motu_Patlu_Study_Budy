import Message from "../../../models/message.js"
import { NextResponse } from "next/server"
import { client } from "@/app/utils/clerk.js"


export const GET = async (req, { params }) => {
    try {
        const {roomId} = await params
        console.log(roomId)
        let messages = await Message.find({roomId})
        for (const [i, msg] of messages.entries()) {
            const userId = msg.senderId
            const user = await client.users.getUser(userId)
            const senderDetails = {
                username: user.fullName,
                profilePicUrl: user.profileImageUrl
            }
            messages[i] = {...msg._doc, senderDetails: senderDetails}
        }
        return NextResponse.json({ messages })
    }
    catch (err) {
        console.log(err)
        return NextResponse.json({ messages: [] })
    }
}