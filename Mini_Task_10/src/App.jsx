import React from 'react'
import Card from './Card'


const App = () => {
  return (<>
    <div className='flex w-dvw justify-around'>

    <Card 
    name={"SATURN"}
    image={"https://www.pngarts.com/files/4/Saturn-Transparent-Image.png"}
    text={"LORDS OF RINGS"}
    size={"75px"}
    />
    <div className='relative bottom-[130px]'>

    <Card 
    name={"SUN"}
    image={"http://pluspng.com/img-png/sun-png-transparent-background-bright-sun-2249.png"}
    text={"ULTIMATE NUCLEAR REACTOR"}
    size={'120px'}
    />
    </div>
    <Card 
    name={"BLACK HOLE"}
    image={"https://www.pngmart.com/files/22/Black-Hole-PNG-Isolated-Image.png"}
    text={"NO ESCAPE"}
    size={'120px'}
    />
    </div>
  </>
  )
}

export default App