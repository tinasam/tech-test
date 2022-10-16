import React from 'react'
// import './App.scss'
import ToDoForm from './Components/ToDo/ToDoForm.jsx'


const App = () => {
  return (
    <>
        <div className="to-doList">
          <section className="toDos">
            <h2 className='toDo_Title'>My ToDos</h2>
            <ToDoForm />
            <h5>Nothing to see here yet...Add a task in the field above!</h5>
          </section>
        </div>
    </>
  )
}

export default App
