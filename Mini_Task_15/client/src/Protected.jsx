import React from 'react'

const Protected = ({setStatus, setMessage}) => {

    async function handleClick() {
        let result = await fetch("http://localhost:3000/signout", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
        let response = await result.json()
        setStatus(false)
        setMessage(response.message)
        console.log(response)
    }

  return (<>
  <div className='w-dvw flex flex-col items-center gap-12'>
    <h2 className='text-xl font-semibold'>This Is A Protected Route</h2>
    <button onClick={handleClick}>Signout</button>
  </div>
    </>
  )
}

export default Protected