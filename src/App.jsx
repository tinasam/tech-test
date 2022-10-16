import React from 'react'
// import './App.scss'
import ToDoList from './Components/ToDo/ToDoList.jsx'


const App = () => {
  return (
    <div className="to-doList">
      <h2 className='toDo_Title'>My ToDos</h2>
      <ToDoList />
      <h5>Nothing to see here yet...Add a task in the field above!</h5>
    </div>
  );
}

export default App
