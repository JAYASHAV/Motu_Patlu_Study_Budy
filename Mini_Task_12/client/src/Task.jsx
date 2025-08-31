import React from 'react'
import { useState } from 'react'

const Task = ({ task, taskId, getTasks }) => {

    let [done, setDone] = useState(false)

    async function handleDelete() {
        let response = await fetch('http://localhost:3000/task', {
            headers: {
                "Content-Type": "application/json",
            },
            method: "DELETE",
            body: JSON.stringify({ id: taskId })
        })
        let data = await response.json()
        console.log(data)

        getTasks()
    }

    function handleChange(event){
        setDone(event.target.checked)
    }

    return (
        <div className='flex items-center justify-between'>
            <div >

            <input type="checkbox" onChange={handleChange}/>
            {done? <s>{task}</s> : <span>{task}</span>}
            </div>
            <button onClick={handleDelete} style={{borderRadius:'50%',height:'15px',width:'15px',padding:'0px',fontSize:'10px',backgroundColor:'red',fontWeight:'bolder' }}>x</button>
        </div>
    )
}

export default Task