import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function TaskItem({ task }) {
  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <Link>
        {/* <button onClick={() => handleEdit(task.id)}>Edit</button> */}
        <button>Edit</button>
      </Link>
      <Link>
        {/* <button onClick={() => handleEdit(task.id)}>Edit</button> */}
        <button>Delete</button>
      </Link>
    </li>
  );
}

export default TaskItem;
