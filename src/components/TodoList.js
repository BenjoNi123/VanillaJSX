import TodoItem from './TodoItem';

function TodoList({ todos }) {
  return (
    <div class="todoList">
      {todos.map((todo) => 
        <TodoItem key={todo.id} todo={todo} />
      )}
    </div>
  );
}

export default TodoList;
