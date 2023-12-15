

// TaskList.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../Redux/Slice/TasksSlice";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  CardActionArea,
} from "@mui/material";
const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("all");

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const filteredTasks = () => {
    switch (filter) {
      case "completed":
        return tasks.filter((task) => task.completed);
      case "active":
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  };

  return (
    <div>
      <div>
        <Grid item xs={12}
          style={{ textAlign: "right" }}>
          <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
            <InputLabel id="demo-select-small-label">Filter</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              label="Filter"
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
              <MenuItem value="active">Active</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </div>
      <Grid container spacing={2}>
        {filteredTasks().map((task) => (
          <Grid item key={task.id} xs={4}>
            <Card style={{ width: "100%" }} className="card">
              <CardContent>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleTask(task.id)}
                />
                {task.completed ? (
                  <>
                    <Typography
                      variant="h6"
                      component="span"
                      style={{
                        color: "green",
                      }}
                    >
                      Completed
                    </Typography>
                    <br />
                  </>
                ) : (
                  <>
                    <Typography
                      variant="h6"
                      component="span"
                      style={{
                        color: "red",
                      }}
                    >
                      Active
                    </Typography>
                    <br />
                  </>
                )}
                <Typography
                  variant="p"
                  component="span"
                  style={{ color: "#1976d2", fontSize: 16, fontWeight: "bold" }}
                >
                  {task.title}
                </Typography>
                <Typography
                  variant="p"
                  component="div"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Description:
                  <br />
                  {task.description}
                </Typography>
              </CardContent>

              <CardActions style={{ textAlign: "right" }}>
                <Button size="small" onClick={() => handleDeleteTask(task.id)}>
                 Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TaskList;



