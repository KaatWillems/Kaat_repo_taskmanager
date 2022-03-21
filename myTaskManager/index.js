// lib and imports
const express = require("express");
const app = express();

const task = require("./controllers/task")


// app setup
app.use(express.json())
app.use("/static", express.static("public"));
app.set("view engine", "ejs");


// pages
app.get('/',(req, res) => {
  // callback
  res.render('tasks.ejs');
});


// Create here your api setup
app.post('/api/taskmanager', (req, res) => {
  task.addTask2(req.body)
  res.send({message: "succes response"})
})

app.post('/api/test', task.showTask2)

app.post('/api/update', (req, res) => {
   task.updateTask2(req.body)
   res.send({message: "succes update"})
})

app.listen(3000, () => console.log("Server Up and running"));
