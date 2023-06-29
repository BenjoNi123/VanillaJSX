import { setEditingTodo, updateTodo, addTodo } from '../store/actions';
import store from '../store/store';

let globalEditingTodo = null;

function EditModal() {
const todo = store.getState().editingTodo;
if(!todo) {
    globalEditingTodo = null;
}
  const dispatchUpdateTodo = () => {
    store.dispatch(setEditingTodo(globalEditingTodo))
    if(globalEditingTodo){
        if(todo.id) {
            store.dispatch(updateTodo())
        } else {
            store.dispatch(addTodo())
        }
    }
    } 
  const setTodoProperty = (key, value) => {
    globalEditingTodo = {...todo, [key]:value};
  }

  return todo ? (
  <div class='editModalContainer'>
    <label for='editName'>Edit name:</label>
    <input id='editName' type='text' placeholder='name' value={todo.name} oninput={(e)=> setTodoProperty('name', e.target.value)} />
    <label for='editDescription'>Edit description:</label>
    <input id='editDescription' type='text' placeholder='description' value={todo.description} oninput={(e)=> setTodoProperty('description', e.target.value)} />
    <button onclick={dispatchUpdateTodo}>Save</button>
  </div>):<></>;
}

export default EditModal;
