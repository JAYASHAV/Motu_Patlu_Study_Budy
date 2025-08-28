import React from 'react'
import { useState } from 'react'
import Usertask from './Usertask'


const Userinput = () => {
  
  let [tasks, setTasks] = useState([])

  function taketask(cid){
    if (cid.key == 'Enter'){
      
        setTasks([...tasks, cid.target.value])
        console.log(tasks)
    }

  }
  function handlemap(ele, i){
    console.log(i, ele)
    return (
        <Usertask data={ele} key={i}/>
    )
  }

  return (<>
    <input type={'text'} onKeyDown={taketask}/>
    <div style={{color:'black',
      textDecoration: 'underline',
    }}>

    {tasks.map(handlemap)}
    </div>


  </>
  )
}

export default Userinput
