
import styles from './TodoListItem.module.css'

function TodoListItem({todo, onRemoveTodo, id}){
return(
    <li className = {styles.ListItem}> {todo} <button className = {styles.ListButton} type ="button" onClick = {() => onRemoveTodo(id)}> Remove </button></li>
)
}

export default TodoListItem;