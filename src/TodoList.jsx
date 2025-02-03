import React from 'react';
import TodoListItem from './TodoListItem';
import styles from './TodoList.module.css';

function TodoList({todoList, onRemoveTodo}){

    return(
        <ul className = {styles.TodoList}>
            {
              todoList.map(
                (item) => <TodoListItem todo = {item.title} key={item.id} onRemoveTodo = {onRemoveTodo} id = {item.id}/>
              )
            }  
        </ul>
         )
}

export default TodoList;