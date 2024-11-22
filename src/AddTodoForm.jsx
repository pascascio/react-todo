import {useState} from 'react';
import React from 'react';


function AddTodoForm({onAddTodo,}){

const [todoTitle, setTodoTitle] = React.useState('');

function handleTitleChange(event){
let newTodoTitle = event.target.value;
setTodoTitle(newTodoTitle);
}

function handleAddTodo(event){
    event.preventDefault()
    onAddTodo({
        title: todoTitle, 
        id: Date.now(),
    });
   setTodoTitle('');
  
}



return(
    <form onSubmit = {handleAddTodo}>
        <label htmlFor = "todoTitle">Title</label>
        <input name = "title" type = "text" id = "todoTitle" value={todoTitle} onChange={handleTitleChange}></input>
        <button>Add</button>
    </form>
)
}

export default AddTodoForm;