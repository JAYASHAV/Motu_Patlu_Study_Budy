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
        <div>
            <input type="checkbox" onChange={handleChange}/>
            {done? <s>{task}</s> : <span>{task}</span>}
            <button onClick={handleDelete}>DELETE</button>
        </div>
    )
}

export default Task