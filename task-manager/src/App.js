import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskList from "../taskmanager2/src/Component/TaskList/TaskList";
import update from "./update";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the backend API and update the state
    axios
      .get("http://localhost:4000/tasks")
      .then((response) => {
        // Process the response data
        setTasks(response.data);
      })
      .catch((error) => {
        if (error.response) {
          // Server responded with a non-2xx status code
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }, []);
  const Task = () => {
    return (
      <div>
        <TaskList setTasks={setTasks} tasks={tasks} />
      </div>
    );
  };

  return (
    <>
      <Router>
        {/* Your routes and components */}
        <Switch>
          {/* Define your routes */}
          <Route exact path="/" component={Task} />
          {/* Other routes */}
        </Switch>
        <Switch>
          {/* Define your routes */}
          <Route exact path="/update" component={update} />
          {/* Other routes */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
