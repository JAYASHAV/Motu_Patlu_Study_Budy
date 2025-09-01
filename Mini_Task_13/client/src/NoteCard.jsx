import React from 'react'

const NoteCard = ({title, description, getNotes, noteId, initiateEdit}) => {
    async function handleDelete(){
        let response = await fetch("http://localhost:3000/note", {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'DELETE',
            body: JSON.stringify({id: noteId})
        })
        let data = await response.json()
        getNotes()
        console.log(data)
    }

  return (
    <div className='w-64 border border-white rounded-2xl justify-self-center p-1'>
        <h3 className='text-lg font-medium text-center'>{title}</h3>
        <pre className='text-sm h-16 mx-2 whitespace-break-spaces overflow-y-auto'>{description}</pre>
        <div className='flex justify-evenly m-1'>
            <button onClick={() => initiateEdit(title, description, noteId)}>EDIT</button>
            <button onClick={handleDelete}>DELETE</button>
        </div>
    </div>
  )
}

export default NoteCard