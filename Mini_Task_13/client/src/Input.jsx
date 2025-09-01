import React from 'react'
import { useEffect } from 'react'
import { useState, useRef } from 'react'
import NoteCard from './NoteCard'

const Input = () => {

    let [notes, setNotes] = useState([])
    let [editId, setEditId] = useState("")
    let titleRef = useRef(null)
    let descriptionRef = useRef(null)

    async function handleForm(formData) {
        let newNotes = {
            title: formData.get('title'),
            description: formData.get('description')
        }
        let body = editId ? { id: editId, note: newNotes } : newNotes
        let method = editId ? 'PUT' : 'POST'
        let response = await fetch("http://localhost:3000/note", {
            headers: {
                "Content-Type": "application/json",
            },
            method: method,
            body: JSON.stringify(body)
        })
        let data = await response.json()
        console.log(data)
        setEditId("")

        getNotes()
    }

    async function getNotes() {
        let response = await fetch("http://localhost:3000/note")
        let data = await response.json()
        let note_list = data.notes
        setNotes(note_list)
        console.log(note_list)
    }

    function initiateEdit(title, description, id) {
        titleRef.current.value = title
        descriptionRef.current.value = description
        setEditId(id)
    }

    function handleCancleEdit() {
        titleRef.current.value = ""
        descriptionRef.current.value = ""
        setEditId("")
    }

    function handleMap(note) {
        return <NoteCard title={note.title} description={note.description} noteId={note._id} key={note._id} getNotes={getNotes} initiateEdit={initiateEdit} />
    }

    function handleEffect() {
        getNotes()
    }

    useEffect(handleEffect, [])

    return (
        <>
            <div className='m-4'>
                <form action={handleForm} className='border-white border flex flex-col p-2 gap-2 w-64 rounded-2xl'>
                    <h2 className='text-xl font-semibold m-auto'>Add More</h2>
                    <div>
                        <label htmlFor="title" className='text-sm'>Title:</label>
                        <br />
                        <input ref={titleRef} className='bg-[#353535] border-1 border-[#9f9f9f] rounded-lg text-sm px-2 py-1 w-full' type="text" placeholder='Title' name='title' required />
                    </div>
                    <div>
                        <label htmlFor="description" className='text-sm'>Description:</label>
                        <br />
                        <textarea ref={descriptionRef} className='bg-[#353535] border-1 w-full h-16 border-[#9f9f9f] rounded-lg text-sm px-2 py-1' placeholder='Description' name='description' required></textarea>
                    </div>
                    <button className='w-fit m-auto' type='submit'>{editId ? 'SAVE' : 'ADD'}</button>
                    {!!editId && <button className='w-fit m-auto' type='button' onClick={handleCancleEdit}>CANCLE</button>}
                </form>
            </div>
            <div className='w-full'>
                <h2 className='text-2xl text-center font-semibold m-2'>Your Notes</h2>
                <div className='grid grid-cols-3 gap-4 items-center w-full'>
                    {notes.map(handleMap)}
                </div>
            </div>
        </>
    )
}

export default Input