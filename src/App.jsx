import { useState } from 'react'
import React from 'react'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem('savedTodoList')));

  React.useEffect(() => {
  localStorage.setItem('savedTodoList', JSON.stringify(todoList));
}, [todoList]);

return[todoList, setTodoList];
  
}


function App() {

  const [todoList, setTodoList] = useSemiPersistentState();
 
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
   <TodoList todoList = {todoList} onRemoveTodo = {removeTodo}/>
  </>
  )
}

export default App;
