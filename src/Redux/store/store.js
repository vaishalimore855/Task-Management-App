// store.js
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from "../Slice/TasksSlice"

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;
