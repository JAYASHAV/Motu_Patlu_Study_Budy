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
  }}>DEAD COUNT</h2>
  
  <div style={{display:'flex'}}>

  <button onClick={countclick}
  style={{margin:"auto",
  borderRadius:"100px",
  borderColor:'gold',
  
  }} >
    <h3 style={{margin:'0' }}>KILLS : {numcount}</h3>
  </button>

  </div>
  
  
  </>
  )
}

export default Counter