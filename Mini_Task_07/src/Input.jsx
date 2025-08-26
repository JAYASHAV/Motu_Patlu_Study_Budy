import React from 'react'
import { useState } from 'react'

const Input = () => {
    let [userInput, serUserInput] = useState("")

    function handleChange(e){
        serUserInput(e.target.value)
    }
  return (<>
  
  <h2 style={{
    width: 'fit-content',
    margin: 'auto'
  }}>Counter</h2>
  <input type={'text'} value={userInput} onChange={handleChange}/>
  <div>{userInput}</div>
  
  </>
  )
}

export default Input