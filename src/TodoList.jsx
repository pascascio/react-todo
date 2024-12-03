import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({todoList, onRemoveTodo}){

    return(
        <ul>
            {
              todoList.map(
                (item) => <TodoListItem todo = {item.title} key={item.id} onRemoveTodo = {onRemoveTodo} id = {item.id}/>
              )
            }  
        </ul>
         )
}

export default TodoList;