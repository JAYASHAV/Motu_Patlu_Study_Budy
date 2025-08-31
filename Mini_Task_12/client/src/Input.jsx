import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Task from './Task'

const Input = () => {

    let [tasks, setTasks] = useState([])

    async function handleEnter(event) {
        let value = event.target.value
        if (event.key == 'Enter') {
            let response = await fetch("http://localhost:3000/task", {
                headers: {
                    "Content-Type": "application/json",
                },
                method: 'POST',
                body: JSON.stringify({ task: value })
            })
            let data = await response.json()
            console.log(data)

            getTasks()

            event.target.value = ''
        }
    }

    async function getTasks() {
        let response = await fetch("http://localhost:3000/task")
        let data = await response.json()
        let task_list = data.ToDos
        setTasks(task_list)
    }

    function handleMap(task, index){
        return <Task task={task} taskId={index} key={index} getTasks={getTasks}/>
    }

    function handleEffect() {
        getTasks()
    }

    useEffect(handleEffect, [])

    return (
        <>
            <div>
                <input type="text" placeholder='ToDo' onKeyDown={handleEnter} />
            </div>
            <div>
                {/* <Task /> */}
                {tasks.map(handleMap)}
            </div>
        </>
    )
}

export default Input