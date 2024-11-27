import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({todoList}){

    return(
        <ul>
            {
              todoList.map(
                (item) => <TodoListItem todo = {item.title} key={item.id} />
              )
            }  
        </ul>
         )
}

export default TodoList;