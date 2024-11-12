import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const todoList = [
  {"id":"0", "title": "gym"},
   {"id":"1", "title": "shower"}, 
   {"id":"2", "title": "breakfast"}
   ];

function App() {
  return(
  <>
 <h1>Todo List</h1>
 <ul>
  {
 todoList.map(
    (item) => <li key = {item.id}> {item.title}</li>
  )
 }
 </ul>
 </>
  )
}

export default App
