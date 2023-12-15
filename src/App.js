// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store/store";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import "./App.css";
import { Container, Grid, CssBaseline } from "@mui/material";
const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        
      <div className='app-wrapper'>
      <h1>Task Management App</h1>
        <Container maxWidth="md" style={{ marginTop: "40px" }}>
          
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TaskForm />
            </Grid>
            <Grid item xs={12}>
              <TaskList />
            </Grid>
          </Grid>
        </Container>
      </div>
      </div>
    </Provider>
  );
};

export default App;
