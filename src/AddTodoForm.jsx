import {useState} from 'react';
import React from 'react';
import InputWithLabel from './InputWithLabel';


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
      <InputWithLabel  todoTitle = {todoTitle} handleTitleChange = {handleTitleChange}> Title:  </InputWithLabel>
    </form>
)
}

export default AddTodoForm;