"use client"
import TypingBox from "./components/TypingBox";
import { createRoom, joinRoom } from "./action";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {

  const [activeRooms, setActiveRooms] = useState([])

  const getActiveRooms = async () => {
    const res = await fetch('http://localhost:3000/room')
    const { activeRooms } = await res.json()
    console.log(activeRooms)
    setActiveRooms(activeRooms || [])
  }

  useEffect(() => {
    getActiveRooms()
  }, [])

  return (
    <>
      <div className="w-xl m-auto">
        <TypingBox
          handleSubmit={createRoom}
          btnText={'Create Room'}
          formClasses=""
          btnClasses="px-2 py-1"
          inputClasses="py-1 px-2"
          name="title"
          placeholder="Enter name of room"
        />
        <TypingBox
          handleSubmit={joinRoom}
          btnText={'Join Room'}
          formClasses=""
          btnClasses="px-2 py-1"
          inputClasses="py-1 px-2"
          name="roomId"
          placeholder="Enter id of room"
        />
      </div>
      <div id="active-rooms" className="flex flex-col items-center">
        {activeRooms.map((room) => {
          return(
            <Link href={`/${room.roomId}`} key={room.roomId} className="bg-[#e3e3e3] text-black rounded-2xl overflow-hidden flex items-center p-2 m-2 w-96 justify-between cursor-pointer">
              <img src="/group_avtar.png" alt="" className="w-8"/>
              <span className="font-semibold">{room.title}</span>
            </Link>
          )
        })}
      </div>
    </>
  );
}
