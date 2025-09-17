// using redux toolkit with react native typescript

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, TodoState } from '../../types/todo';

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Omit<Todo, 'id' | 'createdAt'>>) => {
      const newTodo: Todo = {
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        completed: false,
        ...action.payload,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.map((todo) => 
        todo.id === action.payload.id ? action.payload : todo
      );
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;