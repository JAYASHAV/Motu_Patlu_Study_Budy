"use server"

import { auth } from "@clerk/nextjs/server"
import User from "./models/user.js"
import Room from "./models/room.js"

export const createRoom = async (formData) => {
    try {
        const title = formData.get('title')
        console.log(title)
        const { userId } = await auth()
        if (userId) {
            const newRoom = await Room.create({ adminId: userId, activeUser: [{ userId: userId }], title: title })
            const user = await User.findOne({ clerkId: userId })
            if (!user) {
                const newUser = await User.create({ clerkId: userId })
            }
            await User.findOneAndUpdate({ clerkId: userId }, { $push: { activeRooms: { roomId: newRoom._id, lastMsgId: "", title: title } } })
        }
    }
    catch (err) {
        console.log(err)
    }
}

export const joinRoom = async (formData) => {
    try {
        const roomId = formData.get('roomId')
        console.log(roomId)
        const { userId } = await auth()
        if (userId) {
            const room = await Room.findById(roomId)
            if(!room) return
            let user = await User.findOne({ clerkId: userId })
            if (!user) {
                const newUser = await User.create({ clerkId: userId })
            }
            await User.findOneAndUpdate({ clerkId: userId }, { $push: { activeRooms: { roomId: room._id, lastMsgId: "", title: room.title } } })
            await Room.findByIdAndUpdate(roomId, { $push: { activeUser: { userId: userId } } })
        }
    }
    catch (err) {
        console.log(err)
    }
}