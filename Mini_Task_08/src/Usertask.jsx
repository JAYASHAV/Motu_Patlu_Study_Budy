import React from 'react'
import { useState } from 'react'





const Usertask = ({data}) => {
  let [check,setCheck] = useState()
  
  function updatecheck(cola){
setCheck(cola.target.checked)

  }
  function crossline(){
   if (check == true ){
    return <s style={{color: "#6d6d6dff",}}>{data}</s>
   }
   else {
     return <span>{data}</span>
   }
  }
  
  
  
  return (<>
   

    <div>

    <input type={'checkbox'} onChange={updatecheck}/> 
   {crossline()} 
    

    </div>
  </>
  )
}

export default Usertask