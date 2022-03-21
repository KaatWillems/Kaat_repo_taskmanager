// FRONT END FILE TO INTERACT WITH THE DOM

let button = document.querySelector('.boton')

let list = document.querySelector('#lista')


const addTask = async (infos) => {   
    await fetch('api/taskmanager', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(infos),
      })
      .then((response) => response.json())
      .then((data) => {
        // console.log('Success:', data);
        // console.log("im working!!");
        // let input = document.querySelector('input')
        // let inputvalue = input.value
        // console.log(inputvalue);
        showTask()
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });  
      
     
}

const showTask = async () => {
    await fetch('/api/test', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => response.json())
      .then((data) => {
        console.log('Success:', data);
        

        
            data.forEach((li) => {
           
            let taskinput = `<li><a href="#">${li.task} </a></li>`
            list.insertAdjacentHTML('afterbegin', taskinput)
           

            })
            


      })
      .catch((error) => {
        console.error('Error:', error);
      });


}


button.addEventListener('click',  () => {
    let input = document.querySelector('input')
    let myTasks = [];
    myTasks.push({ "task": input.value })
     addTask(myTasks)
    

   
})

//update task


let link = Array.from(document.querySelectorAll('a'))

console.log(link);

link.forEach((a) => {


  const updateTask = () => {

    fetch('/api/update', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then((data) => {
      console.log('SuccessUpdate:', data);
      
    })

  }


  link.addEventListener('click', () => {

    updateTask()


  })



}); 




