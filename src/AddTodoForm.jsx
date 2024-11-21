function AddTodoForm(props){

function handleAddTodo(event){
    event.preventDefault()
    let todoTitle = event.target.title.value; 
    console.log(todoTitle);
    event.target.reset();
    props.onAddTodo(todoTitle);
}

return(
    <form onSubmit = {handleAddTodo}>
        <label htmlFor = "todoTitle">Title</label>
        <input name = "title" type = "text" id = "todoTitle"></input>
        <button>Add</button>
    </form>
)
}

export default AddTodoForm;