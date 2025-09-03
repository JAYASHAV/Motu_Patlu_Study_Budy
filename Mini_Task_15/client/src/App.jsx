import React from 'react'
import { useState, useEffect } from 'react'
import Login from './Login'
import Signup from './Signup'
import Protected from './Protected'

const App = () => {

  let [status, setStatus] = useState(false)
  let [message, setMessage] = useState('')

  async function verifyUser() {
    let result = await fetch("http://localhost:3000/verifyToken", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    })
    let response = await result.json()
    setStatus(response.isVerified)
    setMessage(response.message)
    console.log(response)
  }

  function handleEffect() {
    verifyUser()
  }

  useEffect(handleEffect, [])

  return (
    <>
      {message && <div className='fixed top-0 bg-gray-300 text-black p-2 rounded-xl text-sm m-2 w-fit right-4'>
        <span>{message}</span>
        <span className='ml-4 cursor-pointer' onClick={()=>{setMessage('')}}>x</span>
      </div>}
      {status
        ? <Protected setStatus={setStatus} setMessage={setMessage}/>
        : (
          <div className='flex justify-evenly w-dvw'>
            <Login setStatus={setStatus} setMessage={setMessage}/>
            <Signup setMessage={setMessage}/>
          </div>
        )
      }
    </>
  )
}

export default App