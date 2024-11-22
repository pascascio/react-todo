import { useState } from 'react'
import React from 'react'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

function App() {
  
  const [todoList, setTodoList] = React.useState([]);
  
  function addTodo(newTodo){
    setTodoList([...todoList, newTodo])
  }


  return(
  <>
   <h1>Todo List</h1>
   <AddTodoForm onAddTodo = {addTodo}/>
   <TodoList todoList = {todoList}/>
  </>
  )
}

export default App;
