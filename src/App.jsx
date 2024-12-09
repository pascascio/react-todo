import { useState } from 'react'
import React from 'react'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

function App() {

  
   
  const [todoList, setTodoList] = React.useState([ ]);
  const[isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: { todoList: JSON.parse(localStorage.getItem('savedTodoList')), 
        }
      })
      }, 2000)
    }).then(result => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    }).catch(error => {
      console.error('Error:', error)
    })

    
  }, []);


  React.useEffect(() => {
    if(!isLoading) {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));}
  }, [todoList]);





  function addTodo(newTodo){
    setTodoList([...todoList, newTodo])
  }

  function removeTodo(id){
    setTodoList(todoList.filter(item => item.id !== id));
    }
    

  return(
  <>

   <h1>Todo List</h1>
   <AddTodoForm onAddTodo = {addTodo}/>
   {isLoading ? <p>Loading....</p> :  <TodoList todoList = {todoList} onRemoveTodo = {removeTodo}/>}
  </>
  )
}

export default App;
