import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTodos as fetchTodosAPI, addTodo as addTodoAPI, updateTodo as updateTodoAPI, deleteTodo as deleteTodoAPI } from '../api';

export const fetchTodos = createAsyncThunk('todos/fetch', async () => {
  try {
    const todos = await fetchTodosAPI();
    return todos;
  } catch (error) {
    console.error('Failed to fetch TODO items:', error);
    throw error;
  }
});

export const addTodo = createAsyncThunk('todos/add', async (_,store) => {
  try {
    const newTodo = await addTodoAPI(store.getState().editingTodo);
    return newTodo;
  } catch (error) {
    console.error('Failed to add TODO item:', error);
    throw error;
  }
});
export const setEditingTodo = createAction('todos/setEditingTODO')
export const updateTodo = createAsyncThunk('todos/update', async (_,store) => {
  try {
    const updatedTodo = await updateTodoAPI(store.getState().editingTodo);
    return updatedTodo;
  } catch (error) {
    console.error('Failed to update TODO item:', error);
    throw error;
  }
});

export const deleteTodo = createAsyncThunk('todos/delete', async (id) => {
  try {
    await deleteTodoAPI(id);
    return id;
  } catch (error) {
    console.error('Failed to delete TODO item:', error);
    throw error;
  }
});
