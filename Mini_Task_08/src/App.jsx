import React from 'react'
import Usertask from './Usertask'
import Userinput from './Userinput'

const App = () => {
  return (<>
  <div style={{border:"5px inset black" ,
  width:"300px",height:"450px",
  margin:"auto",
  borderRadius:"20px",
  backgroundImage:"url('https://img.freepik.com/premium-photo/plain-paper-texture-background_198067-347198.jpg')",
  backgroundRepeat:'no-repeat',
  backgroundSize:'1000px',
    backgroundBlendMode: "hard-light",
    backgroundColor: "#4a4a4a",
    overflowY: 'auto'



  }}>

  <h2 style={{
    textAlign: 'center',
    color:'black',
    border:'3px dashed black',
    width:'fit-content',
    margin:'20px auto',
    padding:"0.5px 5px",
    borderRadius:"20px"
  }}>ToDo List</h2>
  <Userinput/>
  
  </div>
  </>
  )
}

export default App