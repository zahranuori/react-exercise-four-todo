import { useContext } from "react";
import './TodoList.style.css'
import { types } from "../Context/reducer";
import { TodoListContext } from '../Context/Context'
import TodoCard from '../TodoCard/TodoCard'
function TodoList() {
  const { todoList, dispatch } = useContext(TodoListContext);
  const handleAddTodoList = () => {
    const name = prompt("Please enter the title of the activity");
    const description = prompt("Enter if necessary");
    dispatch({ type: types.addToDoListItem, payload: { name, description } })
  };
  return (
    
    <div className="TodoList">
        <div>
        <button onClick={handleAddTodoList} class="cta">
  <span>Create new To Do List</span>
  <svg width="15px" height="10px" viewBox="0 0 13 10">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>
      </div>
      {todoList.map((todo) => (
        <TodoCard todo={todo} key={todo.id} />
      ))}
    
    </div>
  );
}

export default TodoList;
