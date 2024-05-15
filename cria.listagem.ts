import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Card, TextField, Button } from "@material-ui/core";

const UserDetails = () => {
  const [user, setUser] = useState({});
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetch("/api/users/1")
      .then((response) => response.json())
      .then((user) => setUser(user));
  }, []);

  const editUser = () => {
    setEditing(true);
  };

  const updateUser = () => {
    fetch("/api/users/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((user) => setUser(user));
  };

  const cancelEdit = () => {
    setEditing(false);
  };

  return (
    <div>
      <Card>
        <Card.Title>User Details</Card.Title>
        <TextField
          label="Name"
          value={user.name}
          onChange={(event) => setUser({ ...user, name: event.target.value })}
        />
        <TextField
          label="Email"
          value={user.email}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        />
      </Card>
      {editing && (
        <div>
          <Button onClick={editUser}>Edit</Button>
          <Button onClick={updateUser}>Update</Button>
          <Button onClick={cancelEdit}>Cancel</Button>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={UserDetails} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
