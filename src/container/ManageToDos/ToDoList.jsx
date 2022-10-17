import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';

const ToDoList = () => {
    const [actualToDos, setToDos] = useState([]);

    const addToDo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return todo;
        }

        const newToDos = [todo, ...actualToDos]

        setToDos(newToDos);
        console.log(todo, ...actualToDos);
};

        const updateTodo = (todoId, newValue) => {
            if (!newValue.text || /^\s*$/.test(newValue.text)) {
                return;
        }

        setToDos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );
     };

        const deleteTodo = id => {
            const deleteArr = [...actualToDos].filter(todo => todo.id !== id)

            setToDos(deleteArr);
        };

        const completeTodo = id => {
            let updatedTodos = actualToDos.map(todo => {
                if (todo.id === id) {
                    todo.isComplete = !todo.isComplete;
                }
                return todo;
            });

            setToDos(updatedTodos);
        };

        return (
            <div>
                <ToDoForm onSubmit={addToDo} /> 
                <ToDo actualToDos={actualToDos} 
                completeTodo={completeTodo} 
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
                />
            </div>
        );
}

export default ToDoList;