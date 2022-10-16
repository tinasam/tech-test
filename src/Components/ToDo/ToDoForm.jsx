import React, { useState } from 'react';

const ToDoForm = (props) => {
    const [todoInput, settodoInput] = useState('');

    const handletodoInputChange = t => {
        settodoInput(t.target.value);
    }

    const handletodoSubmit = t => {
        t.preventDefault();

        // props.onSubmit({
        //     id: Math.floor(Math.random() * 5000),
        //     text: todoInput,
        // });
        settodoInput('');
    };
    
    return (
        <form className='todo-form' onSubmit={handletodoSubmit}>
        <input 
        type="text" 
        placeholder="Add your task here..." 
        value={settodoInput}
        name="text" 
        className="todoInput" 
        onChange={handletodoInputChange}
        />
        <button className="todoButton">+</button>
       </form> 
    )
}

export default ToDoForm