import React from 'react'
import Card from './Card.jsx'

const App = () => {
  return (<>
    
    <h1 style={{width:'fit-content',margin:'auto',color:'#ffd700'}}>TEAM DETAIL</h1>
    
    <div style={{display:'flex',margin:'20px'}}>

    <Card 
    name='MOTU' email={'motu@samosa.in'} image={'https://wallpaperaccess.com/full/2036686.png'}
    bgcolor={'#2e2e1e'} textcolor={'#ededed'} num = '1'/>
    
    <Card 
    name='PATLU' email='patlu@idea.in' image={'https://www.nickindia.com/wp-content/themes/nick/assets/images/mp10patlu.png'}
    bgcolor={'#12343b'} textcolor={'#ffffffff'} num={'2'}/>

    </div>
    </>
  )
}

export default App