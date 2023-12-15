import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, setTasks } from "../Redux/Slice/TasksSlice";
import { Card, TextField, Button, Grid } from "@mui/material";

const TaskForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    dispatch(setTasks(savedTasks));
  }, [dispatch]);

  const handleAddTask = () => {
    if (!title.trim()) {
      setError("Title cannot be empty");
      return;
    }

    if (!description.trim()) {
      setError("Description cannot be empty");
      return;
    }
    dispatch(addTask({ title, description, completed: false, id: Date.now() }));
    
    const tasksToSave = JSON.stringify(tasks);
    localStorage.setItem("tasks", tasksToSave);

    setTitle("");
    setDescription("");
    setError("");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={8} md={6} lg={4} style={{ margin: "auto" }}>
        <TextField
          fullWidth
          label="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="task-input"
          error={!!error}
          helperText={error}
        />
      </Grid>
      <Grid item xs={12} sm={8} md={6} lg={4} style={{ margin: "auto" }}>
        <TextField
          fullWidth
          label="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="task-input"
          error={!!error}
          helperText={error}
        />
        
      </Grid>
      <Grid item xs={12} sm={8} md={6} lg={4} style={{ margin: "auto", textAlign: "right" }}>
        <Button variant="contained" color="primary" onClick={handleAddTask}>
          Add Task
        </Button>
      </Grid>
    </Grid>
  );
};

export default TaskForm;

