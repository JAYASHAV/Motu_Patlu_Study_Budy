"use client"
import { useEffect, useState } from "react"
import TypingBox from "../components/TypingBox"
import socket from "../utils/socket"
import { useAuth } from "@clerk/nextjs"
import { useParams } from "next/navigation"

function ChatArea() {
    const { userId } = useAuth()
    const { roomId } = useParams()

    let [messages, setMessages] = useState([])

    const sendMessage = (formData) => {
        if (userId) {
            console.log(userId)
            const message = {
                content: formData.get("message"),
                senderId: userId,
                roomId: roomId,
                timeInt: Date.now()
            }
            socket.emit('message', message)
            // setMessages([...messages, message])
        }
    }

    const getAllMessages = async () => {
        const res = await fetch(`http://localhost:3000/room/${roomId}/message`)
        const { messages } = await res.json()
        console.log(messages)
        setMessages(messages)
    }

    socket.on('message', (msg) => {
        console.log(msg)
        setMessages([...messages, msg])
    })

    useEffect(() => {
        socket.emit('join', roomId)

        getAllMessages()

        return () => {
            socket.emit('leave', roomId)
        }
    }, [])


    return (
        <div className="">
            <div id="message-box" className="w-xl m-auto h-[calc(100dvh-44px)] pb-10 hidde-scrollbar overflow-y-auto">
                {messages.map((msg) => {
                    if (msg.senderId == userId) {
                        return <div key={msg._id} className="p-2 flex flex-col self-end">
                            <div className="flex gap-2 items-center flex-row-reverse">
                                <img src={msg.senderDetails?.profilePicUrl || "/group_avtar.png"} alt="" className="w-7 h-7 rounded-full overflow-hidden" />
                                <div className="flex flex-col items-end">
                                    <span className="text-sm text-white">You</span>
                                    <span className="text-xs text-gray-400">{(new Date(msg.timeInt)).toUTCString()}</span>
                                </div>
                            </div>
                            <div className="bg-[#2a2a2a] rounded-xl w-fit h-fit p-2 max-w-96 mr-[30px] mt-1 self-end">
                                {msg.content}
                            </div>
                        </div>
                    }

                    return <div key={msg._id} className="p-2">
                        <div className="flex gap-2 items-center">
                            <img src={msg.senderDetails?.profilePicUrl || "/group_avtar.png"} alt="" className="w-7 h-7 rounded-full overflow-hidden" />
                            <div className="flex flex-col">
                                <span className="text-sm text-white">{msg.senderDetails?.username}</span>
                                <span className="text-xs text-gray-400">{(new Date(msg.timeInt)).toUTCString()}</span>
                            </div>
                        </div>
                        <div className="bg-[#2a2a2a] rounded-xl w-fit h-fit p-2 max-w-96 ml-[30px] mt-1">
                            {msg.content}
                        </div>
                    </div>
                })}
            </div>
            <TypingBox
                handleSubmit={sendMessage}
                btnText={'Send'}
                formClasses="bottom-0 fixed left-0 right-0 mx-64"
                btnClasses="px-4 py-2"
                inputClasses="p-2"
                name="message"
                placeholder="Hi!"
            />
        </div>
    )
}

export default ChatArea