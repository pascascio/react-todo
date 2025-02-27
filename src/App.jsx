import { useState } from 'react'
import React from 'react'
import './App.css'
import TodoList from './Components/TodoList'
import AddTodoForm from './Components/AddTodoForm'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import styles from './App.module.css'

const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}?view=Grid%20view`

function App() {
  const [todoList, setTodoList] = React.useState([ ]);
  const[isLoading, setIsLoading] = React.useState(true);

  const [sortKey, setSortKey] = React.useState("Title");
  
  //sets sort order to sort list items in ascending order
  function handleSort(selectedValue){
    setSortKey(selectedValue);
    fetchData();
  }

  //API fetch GET request to get all list data from airtable API
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

    if(sortKey === "Time Created"){
      (data.records).sort(function(a,b){
        if(a.createdTime < b.createdTime){
          return -1;
        }else if(a.createdTime > b.createdTime){
          return 1;
        } else {
          return 0;
        }}
      )
      } else if(sortKey === "Title"){
        (data.records).sort(function(a,b){
          if(a.fields.title < b.fields.title){
            return -1;
          }else if(a.fields.title > b.fields.title){
            return 1;
          } else {
            return 0;
          }
        });
      }
  
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
 

//API fetch POST request to update list items in airtable API
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

  //API fetch delete request to delete items from airtable API
  async function removeData(id){
    try{
     const response = await fetch(`https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}/${id}`, 
       {
         method: "DELETE",
         headers: {
           'Authorization': `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
           'Content-Type': 'application/json'}, 
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
 
//recalls fetchData if sortKey or TodoList changes/gets updated
  React.useEffect(() => {
     fetchData()
    }, [sortKey, todoList]);


  //saves todoList data in local storage so that it is avaible upon page refresh, get's called every time todolist is updated
  React.useEffect(() => {
    if(!isLoading) {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));}
  }, [todoList]);

//updates todolist with each new todo
  function addTodo(newTodo){
    updateData(newTodo);
    setTodoList([...todoList, newTodo])   
  }

  //deletes specified item and updates the todolist accordingly
  function removeTodo(id){
    removeData(id);
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
    <hr className= {styles.Hstyling}></hr>
    {isLoading ? <p>Loading....</p> :  <TodoList todoList = {todoList} onRemoveTodo = {removeTodo} handleSort = {handleSort}/>}
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
