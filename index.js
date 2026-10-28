// user can create their tasks - completed
// user can delete a task - completed
// user can able to search tasks - Completed
// user can update a task as complete and undo - completed








let tasks = JSON.parse(localStorage.getItem('tasks')) || []
let resultElement = document.querySelector('#result')

function renderTasks(array){

// reset result element
resultElement.innerHTML =' '


// append all values in result
array.forEach((item)=> {
    let divElement = document.createElement('div')
divElement.innerHTML += `
                            <h1><input type="checkbox" ${item.isCompleted ? "checked":"" }>${item.name } - ${item.isCompleted ? "Completed" :""} </h1>
                            <button>Delet</button>

                            `
 divElement.querySelector('input').addEventListener ('change' ,() =>{
    toggleCompleted(item.id)

 })    
 
 divElement.querySelector('button').addEventListener('click' ,() =>{
    deleteTask(item.id)
 } )

 resultElement.appendChild(divElement)

})
}

renderTasks(tasks)

document.getElementById('addBtn').addEventListener('click' , () =>{
    // get input value 
let value = document.getElementById('taskinput').value
let obj ={ id: Date.now(),name:value,isCompleted:false}
    

// push value array
tasks.push(obj)
localStorage.setItem('tasks',JSON.stringify(tasks))
renderTasks(tasks)
})

function deleteTask (taskID){
    tasks =tasks.filter(item => item.id !=taskID)
    localStorage.setItem('tasks',JSON.stringify(tasks))
renderTasks(tasks)


}

document.getElementById('searchInput').addEventListener('keyup', ()=>{
    let searchKey = document.getElementById('searchInput').value

    let searchTasks = tasks.filter(item => {
        return item.name.includes (searchKey)

    })

renderTasks(searchTasks)
})


function toggleCompleted(taskID) {
    tasks = tasks.map((item )=>{
        if ( item.id == taskID){
            item.isCompleted =!item.isCompleted
            return item
        }
        else {
            return item
        }
    })
    localStorage.setItem('tasks',JSON.stringify(tasks))

renderTasks(tasks)
    
}
