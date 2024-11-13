import React from 'react';

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
                (item) => <li key = {item.id}> {item.title}</li>
                            )
            }  
        </ul>
         )
}

export default TodoList