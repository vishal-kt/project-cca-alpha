import { useState ,useEffect } from 'react'

import axios from 'axios'
function App() {
 const [animals, setAnimals]=useState([])

 useEffect(()=>{
  axios.get('/api/animals').then((response)=>{
    setAnimals(response.data)
  })
  .catch((error)=>{
    console.log(error);
  })
 }

 )
  return (
    <>
    <h1>Animals {animals.length}</h1>
      {
         animals.map((animal,index)=>(
          <div key={animal.id}>
            <h3>{animal.title}</h3>
            <p>{animal.desc}</p>
          </div>
         ))
      }

    
    </>
  )
}

export default App
