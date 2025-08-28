import React, { useState } from 'react'
import { useEffect } from 'react'



const App = () => {
  let [listdata, setListdata] = useState([])
  let responsu = ""

  async function handleEffect() {
    responsu = await fetch("http://localhost:3000/")
    let data = await responsu.json()
    setListdata(data)
    console.log(listdata)
  }

  function runner() {
    handleEffect()
  }
  useEffect(runner, [])

  function handlemap(ele, i) {
    return <li style={{margin: "8px"}} key={i}>{ele}</li>
  }


  return (<>
    <div style={{
      border: '2px solid white',
      padding: '0px 12px',
      borderRadius: '10px',
      margin: 'auto'
      }}>
      <h2 style={{textAlign: 'center'}}>Student List:</h2>
      <ul>
      {listdata.map(handlemap)}
      </ul>
    </div>
  </>
  )
}

export default App