import {useState} from 'react';
import React from 'react';
import InputWithLabel from '../components/InputWithLabel';
import styles from './TodoForm.module.css';
import PropTypes from 'prop-types';
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
    <form onSubmit = {handleAddTodo} className = {styles.FormContainer} >
      <InputWithLabel todoTitle = {todoTitle} handleTitleChange = {handleTitleChange} defaultValue = "Enter a todo here!"></InputWithLabel>
    </form>
)
}

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func,
}

export default AddTodoForm;