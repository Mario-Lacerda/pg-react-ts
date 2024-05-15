import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/api/tasks")
      .then((response) => response.json())
      .then((tasks) => setTasks(tasks));
  }, []);

  const addTask = (task) => {
    fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((response) => response.json())
      .then((task) => setTasks([...tasks, task]));
  };

  const deleteTask = (id) => {
    fetch("/api/tasks/" + id, {
      method: "DELETE",
    })
      .then(() => setTasks(tasks.filter((task) => task.id !== id)));
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <TasksList tasks={tasks} />
        </Route>
        <Route path="/add">
          <AddTask onAddTask={addTask} />
        </Route>
        <Route path="/delete/:id">
          <DeleteTask id={id} onDeleteTask={deleteTask} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

