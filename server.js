const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "task",
});
app.use(express.json());
app.use(cors());
// Get all tasks
app.get("/tasks", (req, res) => {
  const query = "SELECT * FROM tasks";
  console.log(`🚀 ~ query:`, query);

  pool.query(query, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.status(201).json(results);
  });
});

// Create a task
app.post("/tasks", (req, res) => {
  const { title, description } = req.body;
  console.log(`🚀 ~ req.body:`, req.body);
  const query = "INSERT INTO tasks (title, description) VALUES (?, ?)";
  const values = [title, description];

  pool.query(query, values, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.status(201).json(results);
  });
});

// Update a task
app.put("/tasks/:id", (req, res) => {
  console.log(`🚀 ~ req.body:`, req.body);
  const { title, description } = req.body;
  const { id } = req.params;
  const query = "UPDATE tasks SET title = ?, description = ? WHERE id = ?";
  const values = [title, description, id];

  pool.query(query, values, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.status(201).json(results);
  });
});

// Delete a task
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM tasks WHERE id = ?";

  pool.query(query, id, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.sendStatus(204);
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
