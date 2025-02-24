import React from 'react';
import TodoListItem from '../components/TodoListItem';
import styles from './TodoList.module.css';
import PropTypes
 from 'prop-types';

function TodoList({todoList, onRemoveTodo, handleAscSort, handleRevSort}){

    return(
      <>
      <div className = {styles.SortContainer}> 
      <p>Sort Order:</p>
      <button className = {styles.SortStyle} onClick = {handleAscSort}>First Added</button>
      <button className = {styles.SortStyle} onClick = {handleRevSort}>Last Added</button>
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