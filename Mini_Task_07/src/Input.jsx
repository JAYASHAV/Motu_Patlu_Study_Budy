/*
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
  }}>Text Preview</h2>
  <input type={'text'} value={userInput} onChange={handleChange}/>
  <div>{userInput}</div>
  
  </>
  )
}

export default Input
*/





import React, { useState } from 'react'

const Input = () => {
  
  let [textdata, setTextdata] = useState("")


  function handleenter (object){

    if (object.key == "Enter"){
      console.log(object.target.value)
      setTextdata(" Hello "+object.target.value+'.'+"YOUR KILL TARGET IS 100!")
    }

  }
  
  return (<>
  
  <div><h2 style={{margin:'auto'}}>ENTER YOUR NAME</h2></div>
  <input type="text"  onKeyDown={handleenter}/>
   <br />
   <p>{textdata}</p>
  </>

  )
}

export default Input
