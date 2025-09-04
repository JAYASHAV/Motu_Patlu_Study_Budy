"use client"
import { useState } from "react"
import TypingBox from "../components/TypingBox"
import socket from "../utils/socket"
import { useAuth } from "@clerk/nextjs"

const ChatArea = () => {
    const { userId } = useAuth()

    const sendMessage = (formData) => {
        if (userId) {
            console.log(userId)
            const message = {
                content: formData.get("message"),
                senderId: userId,
                roomId: "",
                timeInt: Date.now()
            }
            socket.emit('chat', message)
        }
    }

    let [messages, setMessages] = useState([])

    socket.on('chat', (msg) => {
        setMessages([...messages, msg])
    })



    return (
        <div>
            <div id="message-box" className="">
                {messages.map((msg) => {
                    return <div key={msg.content} className="p-2 odd:bg-gray-600 even:bg-black">{msg.content}</div>
                })}
            </div>
            <TypingBox
                handleSubmit={sendMessage}
                btnText={'Send'}
                formClasses="bottom-0 fixed left-0 right-0"
                btnClasses="px-4 py-2"
                inputClasses="p-2"
                name="message"
                placeholder="Hi!"
            />
        </div>
    )
}

export default ChatArea