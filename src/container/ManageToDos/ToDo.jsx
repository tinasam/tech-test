import React, { useState }  from 'react';
import ToDoForm from './ToDoForm';
// import ToDoList from './ToDoList';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const ToDo = ({actualToDos, completeTodo, deleteTodo, updateTodo}) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
const submittodoUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({
        id: null,
        value: ''
    })
}

if (edit.id) {
    return <ToDoForm edit={edit} onSubmit={submittodoUpdate} />;    
    }
       
    return actualToDos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' :'todo-row'} 
        key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {(todo.text)}
            </div>
           <div className='icons'>
                <RiDeleteBin6Line
                 onClick={() => deleteTodo(todo.index)}
                 className='delete-icon'
                />
                <TiEdit
                 onClick={() => setEdit({id: todo.id, value: todo.text})}
                 className='edit-icon'
                />
            </div>
           
        </div>
    ));
}

export default ToDo;