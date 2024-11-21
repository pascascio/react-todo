import { useState } from 'react'
import React from 'react'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

function App() {
  
  const [newTodo, setNewTodo] = React.useState('');

  return(
  <>
   <h1>Todo List</h1>
   <AddTodoForm onAddTodo = {setNewTodo}/>
   <p>{newTodo}</p>
   <TodoList/>
  </>
  )
}

export default App;
