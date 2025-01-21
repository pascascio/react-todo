function TodoListItem({todo, onRemoveTodo, id}){
return(
    <li> {todo} <button type ="button" onClick = {() => onRemoveTodo(id)}> Remove </button></li>
)
}

export default TodoListItem;