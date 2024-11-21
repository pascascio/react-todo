import React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [
    {id:"0", 
    title: "gym"
    },
     {id:"1",
      title: "shower"
    }, 
     {id:"2", 
     title: "breakfast"
    }
     ];

function TodoList(){
    return(
        <ul>
            {
              todoList.map(
                (item) => <TodoListItem todo = {item.title} key= {item.id} />
              )
            }  
        </ul>
         )
}

export default TodoList;