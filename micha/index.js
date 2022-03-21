// lib and imports
const express = require("express");
const app = express();
const port = 3000
const task = require("./controllers/taskController")

// app setup
app.use(express.json())
app.use("/static", express.static("public"));
app.set("view engine", "ejs");





// pages
app.get('/',(req, res) => {
  // callback
  res.render('tasks.ejs');
});


// CRUD routes

// Create a task
app.post('/api/addTask', (req, res) =>{
	task.addTask(req, res, req.body) // the backend function   (task is because of the express syntax see line 5)
})

// Read (all tasks)
app.get('/api/getAllTasks', (req, res) => {
	task.readAllTasks(req, res) // the backend function 
})

// Update a task
app.put('/api/updateTask/:taskId', (req, res) => {
	task.updateTask(req, res) // the backend function 
})

// Delete a task
app.delete('/api/deleteTask/:taskId', (req, res) => {
	task.deleteTask(req, res) // the backend function 
})


// Launch server :
app.listen(port, () => console.log(`Server Up and running on port ${port}`));
