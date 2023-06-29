import { deleteTodo, setEditingTodo, updateTodo } from '../store/actions';
import store from '../store/store';

function TodoItem({ todo }) {

  const handleDelete = () => {
    store.dispatch(deleteTodo(todo.id));
  };
  const handleUpdate = () => {
    store.dispatch(setEditingTodo(null))
    store.dispatch(setEditingTodo(todo))
  }

  const handleChangeVote = (vote) => {
    store.dispatch(setEditingTodo(null))
    const setTodoProperty = (key, value) => {
     return {...todo, [key]:value};
    }
    if(vote == "down"){
      let updatedTodo = setTodoProperty('votes', +todo.votes - 1)
      store.dispatch(setEditingTodo(updatedTodo))
    }
    if(vote == "up"){
      let updatedTodo = setTodoProperty('votes', +todo.votes + 1)
      store.dispatch(setEditingTodo(updatedTodo))
    }
    store.dispatch(updateTodo())
  }
  return (
  <div class='todoItemContainer'>
    <img src={todo.image_url}></img>
    <h1>{todo.name}</h1>
    <span>{todo.description}</span>
    <div>
    <a target='_blank' href={todo.url}>Visit us</a>
    </div>
    <div style="todoVote">
      <button onclick={() => handleChangeVote('down')}>Down</button>
      <span>{todo.votes}</span>
      <button onclick={() => handleChangeVote('up')}>Up</button>
    </div>
    <div style="todoActions">
      <h3>Actions</h3>
      <button onclick={handleDelete}>Delete</button>
      <button onclick={handleUpdate}>Edit</button>
    </div>
  </div>);
}

export default TodoItem;
