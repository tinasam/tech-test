import React, { useState } from 'react';
import ToDoForm from './ToDoForm';

const ToDoList = () => {
    const [actualToDos, setToDos] = useState([]);

    const addToDo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newToDos = [todo, ...actualToDos]

        setToDos(newToDos);
        }

  return (
    <div>
      <ToDoForm  onSubmit={addToDo} />  
    </div>
  );
}

export default ToDoList;