const containerElement = document.getElementById("container")
const toDoFormElement = document.getElementById("todo-form")



function deleteToDo(id){
    const todoElement = document.getElementById(id)
    todoElement.remove()
}

function toggleTask(event){
    
    if(event.target.style.backgroundColor != 'lightgreen') {
        event.target.style.backgroundColor = 'lightgreen'
    } else  {
        event.target.style.backgroundColor = 'lightblue'
    }
}

toDoFormElement.addEventListener("submit", (e) => {
    e.preventDefault()
    e.stopPropagation()
    const inputValue = e.target[0].value
    if(inputValue.trim() == "") return
    const timeStamp = Date.now()
    e.target[0].value = ""
   
    containerElement.innerHTML += `<div id=${timeStamp} class="todo-task" onClick="toggleTask(event)">
    <p>${inputValue}</p>
    <button id="delete-button" onClick="deleteToDo(${timeStamp})">X</button>
    </div>`
})






