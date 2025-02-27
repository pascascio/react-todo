
import styles from './TodoListItem.module.css'
import PropTypes
 from 'prop-types';
function TodoListItem({todo, onRemoveTodo, id}){
return(
    <>
    <li className = {styles.ListItem}> 
    <input type = "checkbox" id = {id}/>
   <label>{todo}</label>
   <button className = {styles.ListButton} type ="button" onClick = {() => onRemoveTodo(id)}> Remove </button></li>
   </>
)
}


TodoListItem.propTypes = {
    todo: PropTypes.string, 
    onRemoveTodo: PropTypes.func, 
    id: PropTypes.string, 
}

export default TodoListItem;