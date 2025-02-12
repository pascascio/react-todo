import { useState } from 'react'
import React from 'react'
import './App.css'
import TodoList from './Components/TodoList'
import AddTodoForm from './Components/AddTodoForm'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import styles from './App.module.css'

const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}?view=Grid%20view&sort[0][field]=title&sort[0][direction]=asc`

console.log(url)

function App() {
  const [todoList, setTodoList] = React.useState([ ]);
  const[isLoading, setIsLoading] = React.useState(true);

  async function fetchData(){
    const options = 
    {
       method: "GET",
       headers: {
         Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
       }
     }

    try{
      const response = await fetch(url, options)
      
      if(!response.ok){
        throw new Error({Error: `${response.status}`})
      }
    
    const data = await response.json();
    let todos;
    
    if (data.records === "null"){
      todos = [];
    } else{
      todos = data.records.map((todo) => {
        return {
          title : todo.fields.title,
          id : todo.id
        }
  
      });
    }
 

    setTodoList(todos);
    setIsLoading(false);
  }catch(error){
    console.log(error.status)
  }
  }



  async function updateData(todo){
     try{
    
      const airtableData = {
        fields: {
          title:todo.title,
        }
      };

      const response = await fetch(url, 
        {
          method: "POST",
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
            'Content-Type': 'application/json'}, 
          body: JSON.stringify(airtableData),
        });

      if(!response.ok){
        throw new Error(`Error has occured: ${response.message}`)
      }
    
      const data  = await response.json();
      return data;

     }catch(error){
      console.log(error.message);
      return null;
     }
  }

  React.useEffect(() => {
     fetchData()
    }, []);


  React.useEffect(() => {
    if(!isLoading) {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));}
  }, [todoList]);





  function addTodo(newTodo){
    updateData(newTodo);
    setTodoList([...todoList, newTodo])   
  }
console.log(todoList);
  function removeTodo(id){
    setTodoList(todoList.filter(item => item.id !== id));
    }
    

  return(
    
  <BrowserRouter>
  <Routes>
  <Route path = "/"  element =
   {
    <div className = {styles.TodoList}>
    <h1 className = {styles.Heading}>Todo List</h1>
    <AddTodoForm onAddTodo = {addTodo}/>
    {isLoading ? <p>Loading....</p> :  <TodoList todoList = {todoList} onRemoveTodo = {removeTodo}/>}
   </div>
  }
  >
  </Route>
  <Route path = '/new' element ={
    <h1>New Todo List</h1>
  }
  >
  </Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App;
