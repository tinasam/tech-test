import React, { useState, useEffect, useRef } from 'react';

const ToDoForm = (props) => {
    const [todoInput, settodoInput] = useState('');
    const inputFocus = useRef(null)

    useEffect(() => {
        inputFocus.current.focus()
    })

    const handletodoInputChange = t => {
        settodoInput(t.target.value);
    }

    const handletodoSubmit = t => {
        t.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: todoInput
        });
        settodoInput('');
    };

    return (
        <form className='todo-form' onSubmit={handletodoSubmit}>
        <input 
        type='text' 
        placeholder="Add your task here..." 
        value={todoInput}
        name="text" 
        className="todoInput" 
        onChange={handletodoInputChange}
        ref={inputFocus}
        />
        <button className="todoButton">+</button>
       </form> 
    )
}

export default ToDoForm;