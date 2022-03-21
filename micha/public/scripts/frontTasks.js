// FRONT END FILE TO INTERACT WITH THE DOM


// some variables
const addTaskButton = document.querySelector('#btn-agregar')
const inputElement = document.querySelector('#tareaInput')
const list = document.querySelector("#lista")






// FUNCTION DEFINITIONS
////////////////////////


// add one task in the list
const updateOneTaskInTheDOM = (task, order) => {

	// create an new list item element:
	const newLiElement = document.createElement('li')

	// create a new link to put inside the <li>:
	const newAElement = document.createElement('a')
	// add some atributes to the <a>:
	newAElement.dataset.id = task.task_id
	newAElement.href="#"
	newAElement.dataset.completed = task.completed
	// strikethrough text if completed :
	newAElement.style.textDecoration = task.completed ? "line-through" : "none"



	// create a span that contains a cross, to delete the task:
	const newSpan = document.createElement('span')
	newSpan.innerText = "×"

	// Write the content of the task inside the <a>
	newAElement.innerText = `${order} - ${task.content} - ${task.completed ? "completed" : "to do"}`

	// put the <a> AND the span in the <li> :
	newLiElement.appendChild(newAElement)
	newLiElement.appendChild(newSpan)

	// add everything to the actual list:
	list.appendChild(newLiElement)

	// add event listener on the <a> to update the task (change its status):
	newAElement.addEventListener('click', (event) => {
		event.preventDefault()
		const currentCompleted = JSON.parse(event.target.dataset.completed)
		updateOneTaskAPICall(task.task_id, !currentCompleted)

	})

	// add event listener on the span to delete the task:
	newSpan.addEventListener('click', (event) => {
		deleteOneTaskAPICall(task.task_id)
	})


}

// update all the list elements in the DOM
const updateWholeList = (listOfTasks) => {

	// empty list first
	list.innerHTML = ""

	listOfTasks.forEach((task, index) => {
		updateOneTaskInTheDOM(task, index + 1)
	})

}


// api calls :
///////////////


// addATask
const addTaskAPICall = (taskContent) => {

	fetch('/api/addTask', {
    method: 'POST', // or 'PUT'
    headers: {
    	'Content-Type': 'application/json',
    },
    body: JSON.stringify({task: taskContent})
  })
	.then(response=> response.json())
	.then((data) => {
		// only update the last element of the list
		let order = list.childNodes.length + 1
		updateOneTaskInTheDOM(data.task, order)
	})
	.catch((error) => {
		console.log(error)})

}

// getAllTasks
const getAllTasksAPICall = () => {

	fetch('/api/getAllTasks', {
    method: 'GET', // or 'PUT'
  })
	.then(response=> response.json())
	.then((data) => {
		updateWholeList(data.tasks)
	})
	.catch((error) => {
		console.log(error)
	})


}


// update a task
const updateOneTaskAPICall = (taskId, newCompleted) => {
	fetch(`/api/updateTask/${taskId}`, {
    method: 'PUT', // or 'PUT'
    headers: {
    	'Content-Type': 'application/json',
    },
    body: JSON.stringify({newCompleted: newCompleted})

  })
	.then(response=> response.json())
	.then((data) => {
		updateWholeList(data.tasks)
	})
	.catch((error) => {
		console.log(error)
	})


}


// update a task
const deleteOneTaskAPICall = (taskId) => {
	fetch(`/api/deleteTask/${taskId}`, {
    method: 'DELETE', // or 'PUT'
  })
	.then(response=> response.json())
	.then((data) => {
		updateWholeList(data.tasks)
	})
	.catch((error) => {
		console.log(error)
	})


}



// DO SOME STUFF
///////////////////


// load tasks in the DOM :
getAllTasksAPICall()


// add Event listener on task button
addTaskButton.addEventListener('click', (event)=>{

	let myNewTaskContent = inputElement.value
	addTaskAPICall(myNewTaskContent)
	inputElement.value = ""

})
