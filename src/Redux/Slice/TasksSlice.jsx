// tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: { tasks: [] },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { addTask, toggleTask, deleteTask,setTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
