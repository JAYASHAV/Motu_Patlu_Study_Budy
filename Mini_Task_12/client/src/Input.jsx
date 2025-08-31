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
        <div className='border-black p-3 border-[4px] h-[350px] w-[250px] rounded-[30px] bg-[#c6aeae7a]'>
            <div className='text-black font-bold border-dashed border-[3px] border-black rounded-[10px] m-auto w-fit my-[5px]'>
                ToDo List
                </div>

            <div className='border-black text-black'>
                <input type="text" placeholder='Enter Task' onKeyDown={handleEnter} 
                 className='text-black border-black outline-black bg-gray-300'/>
            </div>
            <div className='text-black'>
                {/* <Task /> */}
                {tasks.map(handleMap)}
            </div>
        </div>
        </>
    )
}

export default Input