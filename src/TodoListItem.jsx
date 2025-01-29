
import styles from './TodoListItem.module.css'

function TodoListItem({todo, onRemoveTodo, id}){
return(
    <li className = {styles.ListItem}> {todo} <button type ="button" onClick = {() => onRemoveTodo(id)}> Remove </button></li>
)
}

export default TodoListItem;