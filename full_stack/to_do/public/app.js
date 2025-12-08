const todoForm = document.getElementById("todo-form");                                                                                //form element
const todoInput = document.getElementById("todo-input");                                                                             //input element
const addBtn = document.getElementById("add-btn");                                                                                  //add button
const todoList = document.getElementById("todo-list");                                                                             //ul element
let isTodoListEmpty = true;                                                                                                       //flag variable

const BaseURL = "http://localhost:3000";                                                                                         //api/v1";//base url for the api
document.addEventListener("DOMContentLoaded", loadTodos);                                                                //load todos on page load


async function loadTodos(){                                                                                                //async function --->promise based function
    const response = await fetch(`${BaseURL}/api/v1/todos`); //GET Request                                                              //fetch()--->calling the api
    if(!response.ok){                                                                                                     //response.ok-->boolean value
      alert("The URL is not valid!")                                                                                       //alert if response is not ok
    }
    //Converting ReadableStream to JSON
    const data = await response.json();                                                                       //{success:true, alltodos:[{},{},.....,{}]}   console.log(data);
    console.log(data.allTodos);                                                                               //array of todos
    renderTodos(data.allTodos);                                                                               //rendering todos on the page    
}
todoForm.addEventListener("submit", async function(event){                                                     //form submit event
    event.preventDefault();                                                                                 //preventing default behavior of the form submission
    console.log("Form submitted");

    const newTaskText = todoInput.value.trim();                                                              //Assigning input value to a variable "newTaskText"

  
    if(newTaskText === ""){                                                                                  //not allowing empty tasks
        alert("Please enter a task!")
        return;
    }

    const requestOptions = {                                                                               //request options for fetch
        method: "POST",                                                                                   //HTTP method, post--->creating a resource
        headers: {
            "Content-Type": "application/json"
    },
    body: JSON.stringify({                                                                             //converting JS object to JSON string
        taskText: newTaskText,
        isTaskDone: false,
        timeStamp: new Date().toLocaleString()
    })
};

    const response = await fetch(`${BaseURL}/api/v1/todos`, requestOptions);                            //calling the api to create a new task
    if(!response.ok){
        alert("Failed to add the task. Please try again.");
        return;
    }
    const data = await response.json();                                                                  //converting ReadableStream to JSON
    console.log(data);
    todoInput.value = "";                                                                               //clearing the input field after adding the task
})
async function deleteTask(taskId){                                                                       //async function to delete a task
    const response = await fetch(`${BaseURL}/api/v1/todos/${taskId}`, {                                    //delete task api call 
        method: "DELETE"
    }); 
    const data = await response.json();                                                                   //converting ReadableStream to JSON
}
async function toggleTask(taskObject){
    const response = await fetch(`${BaseURL}/api/v1/todos/${taskObject.taskId}`,{})                         //toggle task api call
    const data = await response.json();  
    console.log(data);                                                                 //converting ReadableStream to JSON
}
    

function createListItem(taskObject){                                                                      //function to create a list item
    const newListItem = document.createElement("li"); //<li></li>                                                        //create li element
    newListItem.textContent = taskObject.taskText;    //<li>Go to Market</li>                                                         //set id attribute
   
    const isTaskDoneCheckbox = document.createElement("input");                                             //create checkbox element
    isTaskDoneCheckbox.setAttribute("type", "checkbox");                                                         //set type attribute
    isTaskDoneCheckbox.addEventListener("change",() => toggleTask(taskObject))                                            //event listener for checkbox change

    const p = document.createElement("p");                                                                       //create p element
    p.setAttribute("id","taskContent")                                                                            //set id attribute

    const taskTextSpan = document.createElement("span");                                                          //create span element for task text
    taskTextSpan.textContent = taskObject.taskText;                                                             //set text content

    const timestampSpan = document.createElement("span");                                                     //create span element for timestamp, span is used to group inline-elements in a document
    timestampSpan.textContent = taskObject.timeStamp;
    console.log(taskObject.timeStamp);

    p.appendChild(taskTextSpan);                                                                                 //append task text span to p element
    p.appendChild(timestampSpan);                                                                                //append timestamp span to p element

    const deleteBtn = document.createElement("button");                                                            //create delete button
    deleteBtn.setAttribute("id","taskDeleteBtn")                                                                //set id attribute
    deleteBtn.textContent = "X";                                                                                 //set button text content

    deleteBtn.addEventListener("click", ()=>{                                                                    //event listener for delete button
        deleteTask(taskObject.taskId);  
                                                                                //call delete task function
     } );

    newListItem.appendChild(isTaskDoneCheckbox);                                                                //append checkbox to li element
    newListItem.appendChild(p);                                                                                 //append p element to li element
    newListItem.appendChild(deleteBtn);                                                                        //append delete button to li element
    return newListItem;
}
function toggleTask(id) {
    todos = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
}



function renderTodos(todos){                                                                                    //function to render todos on the page
    todoList.inneHTML = "";                                                                                   //clear the existing list
  
    if(!todos.length){                                                                                      //if no todos are present
        todoList.innerHTML = "<p>No tasks available. Please add a task.</p>";                                 //display message
        return;
    }
    isTodoListEmpty = false;                                                                                 //set flag to false if todos are present
    todos.map((todo)=>{                                                                                    //iterate through the todos array
        const newListItem = createListItem(todo);                                                           //create list item for each todo
        todoList.prepend(newListItem);                                                                       //prepend the new list item to the ul element
    });
   
}
