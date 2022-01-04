import { useContext } from 'react'
import { TodoListContext } from '../Context/Context'
import { types } from '../Context/reducer'
import TodoItems from '../TodoItems/TodoItems'
import "./TodoCard.style.css"
const TodoCard = ({ todo }) => {
    const { dispatch } = useContext(TodoListContext)
    const handleDeleteTodoList = (id) => {
        dispatch({ type: types.deleteTodoListItem, payload: { id } })
    };
    const handleAddToDoItems = (id) => {
        const title = prompt("please enter the title");
        dispatch({ type: types.addToDoItems, payload: { TodoId: id, title } })
    };

    return (
        <div className="todo" key={todo.id}>
            <div className="todo_head">
                <h1>{todo.name}</h1>
                <button className='delete-todo' onClick={() => handleDeleteTodoList(todo.id)}>
                    Delete
                </button>
            </div>
            <p>{todo.description}</p>
            <TodoItems todo={todo} />
            <div>

                <button className='add-item' onClick={() => handleAddToDoItems(todo.id)}>
  <span class="hover-underline-animation">  New Item </span>
  <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
    <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
  </svg>
</button>   
            </div>
        </div>
    )
}

export default TodoCard
