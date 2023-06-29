const BASE_URL = 'http://localhost:3000';

export async function fetchTodos() {
  const response = await fetch(`${BASE_URL}/todos`);
  const todos = await response.json();
  return todos;
}

export async function addTodo(todo) {
  const response = await fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await response.json();
  return newTodo;
}

export async function updateTodo(todo) {
  const response = await fetch(`${BASE_URL}/todos/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  const updatedTodo = await response.json();
  return updatedTodo;
}

export async function deleteTodo(id) {
  await fetch(`${BASE_URL}/todos/${id}`, {
    method: 'DELETE',
  });
}

export async function changeVote(id) {
  const response = await fetch(`${BASE_URL}/todos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  const updatedTodo = await response.json();
  return updatedTodo;
}
