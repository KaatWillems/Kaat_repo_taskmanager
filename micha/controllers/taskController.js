const sqlite3 = require('sqlite3').verbose();

// BACKEND FILE FOR MY DATABASES QUERIES


// Create first a database in db.taskdatabase in the folder /db.
// then with sqlite3 add the right columns, for example :
//
// CREATE TABLE tasks (
// 	task_id INTEGER PRIMARY KEY,
// 	content TEXT NOT NULL,
// 	completed BOOLEAN
// );



// CRUD
//////////


// Create a Task
const addTask = (req, res, data) => {

	let taskId

	let db = new sqlite3.Database('db/db.taskdatabase');
	db.run(`INSERT INTO tasks (content, completed) VALUES (?, ?)`, [data.task, false], function(err) {
		if (err) {
			return console.log(err);
		}
      // get the last insert id
      taskId = this.lastID
      console.log(`A row has been inserted with rowid ${taskId}`);
    });

	db.close((err) => {

		if (err) {
			return res.send({ error: "Cannot insert task into database"})
		}
		// send the inserted task back to the front, as a proof it worked :
		res.send({task: {content: data.task, id: taskId, completed: false}})
	});

}

// Read (all tasks actually)
const readAllTasks = (req, res) => {
	let db = new sqlite3.Database('db/db.taskdatabase');
	// let respMsg = {}
	let allTasks = []

	db.all(`SELECT * FROM tasks;`, [], (err, rows) => {
		if (err) {
			throw err;
		}

		allTasks = rows

	});

	db.close((err) => {
		if (err) {
			res.send(err)
		}
		// send all the tasks back to the front :
		res.send({tasks: allTasks})
	});

}


// Update a task
const updateTask = (req, res) => {

	const taskId = req.params.taskId
	const newCompleted = req.body.newCompleted

	// update sqlite3 db :
	let db = new sqlite3.Database('db/db.taskdatabase');
	db.run(`UPDATE tasks SET completed = ? WHERE task_id = ?`, [ newCompleted, taskId], function(err) {
		if (err) {
			return console.error(err.message);
		}
		console.log(`Row(s) updated: ${this.changes}`);

	});

	// close the database connection
	db.close((err) => {
		if (err) {
			res.send(err)
		}
		// send back the whole updated list of tasks:
		readAllTasks(req, res)
	});





}



// Delete a task
const deleteTask = (req, res) => {

	const taskId = req.params.taskId

	// delete sqlite3 db :
	let db = new sqlite3.Database('db/db.taskdatabase');

	// delete a row based on id
	db.run(`DELETE FROM tasks WHERE task_id=?`, taskId, function(err) {
	  if (err) {
	    return console.error(err.message);
	  }
	  console.log(`Row(s) deleted ${this.changes}`);
	});


	// close the database connection
	db.close((err) => {
		if (err) {
			res.send(err)
		}
		// send back the whole updated list of tasks:
		readAllTasks(req, res)
	});



}



module.exports = {
	readAllTasks,
	addTask,
	updateTask,
	deleteTask
}

