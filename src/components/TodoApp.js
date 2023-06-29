import TodoList from './TodoList';
import store from '../store/store';
import EditModal from './EditModal';
import { setEditingTodo } from '../store/actions';

const getState = (state) => {
    return state.todos
};
function TodoApp() {
  const todos = getState(store.getState())

  const handleAddTodo = () => {store.dispatch(setEditingTodo({name: ''}))}
  return (
    <div>
      <h1>TODO App</h1>
      <button onclick={handleAddTodo}>Add Todo</button>
      <EditModal />
      <TodoList todos={todos} />
    </div>
  );
}

export default TodoApp;
