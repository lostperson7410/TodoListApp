// using redux toolkit with react native typescript

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './actions/todoReducer';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;