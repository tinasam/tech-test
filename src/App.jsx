// import React from 'react';
import "./App.scss";
// import ToDoForm from './ToDoForm.jsx';
import ToDoList from './container/ManageToDos/ToDoList.jsx'


const App = () => {
  return (
    <div className="to-doList">
      <h2 className='toDo_Title'>My ToDos</h2>
      <button className='resetButton'>Reset</button>
      <ToDoList/>
      <h5>Nothing to see here yet...Add a task in the field above!</h5>
    </div>
  );
}

export default App
