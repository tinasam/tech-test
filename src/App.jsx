import React from 'react'
// import './App.scss'
import ToDo from "./Components/ToDo/ToDo.jsx"


const App = () => {
  return (
    <div>
      <h2>My ToDos</h2>
      <button className='buttonToDo'>Reset</button>
      <button className='addToDos'>+</button>

    </div>
  )
}

export default App
