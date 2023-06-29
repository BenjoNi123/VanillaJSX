import { createReducer } from '@reduxjs/toolkit';
import { addTodo, updateTodo, deleteTodo, fetchTodos, setEditingTodo, changeVote } from './actions';
import { cloneDeep } from 'lodash';

const initialState = {
  todos: [{
    "id": "1",
    "name": "Toggl",
    "description": "Toggl is a simple and intuitive time tracking tool with powerful reporting features. It offers desktop and mobile apps, as well as browser extensions.",
    "url": "https://toggl.com/",
    "image_url": "https://example.com/images/toggl.png",
    "descriptors": {
      "Pricing": "Freemium",
      "Platforms": "Web, Windows, macOS, iOS, Android",
      "Integrations": "Asana, Trello, Slack, Jira, and more"
    }
  }],
  //copy of current edited TODO
  editingTodo: null
};

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo.fulfilled, (state, action) => {
      state.todos.push(action.payload);
      state.editingTodo = null;
    })
    .addCase(updateTodo.fulfilled, (state, action) => {
      state.editingTodo = null;
      const updatedTodo = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      );
    })
    .addCase(deleteTodo.fulfilled, (state, action) => {
      const id = action.payload;
      if(state.editingTodo && state.editingTodo.id == id){
        state.editingTodo = null
      }
      state.todos = state.todos.filter((todo) => todo.id !== id);
    })
    .addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    })
    .addCase(setEditingTodo, (state, action) => {
      state.editingTodo = cloneDeep(action.payload)
    })
});

export default rootReducer;
