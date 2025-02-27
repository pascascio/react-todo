import React from 'react';
import TodoListItem from '../components/TodoListItem';
import styles from './TodoList.module.css';
import PropTypes
 from 'prop-types';

function TodoList({todoList, onRemoveTodo, handleSort}){

  function handleSelectChange(event){
  const selectedValue = event.target.value;
  handleSort(selectedValue);
  }
    return(
<>
<div className = {styles.Dropdown}>
  <label>Sort By: 
  <select  id ="sort-menu" onChange = {handleSelectChange}>
    <option>Time Created</option>
    <option>Title</option>
  </select>
  </label>
</div>


           <ul className = {styles.TodoList}>
            {
              todoList.map(
                (item) => <TodoListItem todo = {item.title} key={item.id} onRemoveTodo = {onRemoveTodo} id = {String(item.id)}/>
              )
            }  
        </ul>
        </>
         )
}


TodoList.propTypes = {
    todoList: PropTypes.array, 
    onRemoveTodo: PropTypes.func, 
};

export default TodoList;