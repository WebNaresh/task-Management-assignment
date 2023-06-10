import React from "react";
import TaskItem from "../TaskList/TaskItem";

function TaskList({ tasks, setTasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem setTasks={setTasks} key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;
