import Room from "../../models/room.js"
import { NextResponse } from "next/server"

export const GET = async (req, {params}) => {
    try{
        const { roomId } = await params
        const room = await Room.findById(roomId)
        return NextResponse.json({room})
    }
    catch (err) {
        console.log(err)
        return NextResponse.json({room: []})
    }
}