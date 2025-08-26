import React from 'react'
import { useState } from 'react'

const Counter = () => {

let [numcount, setNumcount] = useState(0)


function countclick (){

    setNumcount(numcount+1)
    
}

return (<>
  
  <h2 style={{
    width: 'fit-content',
    margin: 'auto'
  }}>Counter</h2>
  <button onClick={countclick}>
    CLICK : {numcount}
  </button>
  
  
  </>
  )
}

export default Counter