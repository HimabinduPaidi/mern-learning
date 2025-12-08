import { Client, TablesDB, ID } from "appwrite"; // Importing the Appwrite SDK modules


// Initialize the Appwrite client
const client = new Client()                             
    .setProject("692d272400201999cad0")
    .setEndpoint("https://sgp.cloud.appwrite.io/v1")

const tablesDB = new TablesDB(client);

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
let isTodoListEmpty = true;
// Load existing todos from the database when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadTodos)
// Function to load todos from the database
async function loadTodos() {
    const tasksData = await tablesDB.listRows({
        databaseId: '692d3ecc0016d87885a9',
        tableId: 'tasks'
    });
    console.log(tasksData)
    renderTodos(tasksData.rows)
}
// Handle form submission to add a new todo
todoForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const newTaskText = todoInput.value.trim(); // Assigning the value of input to variable "newTaskText"
    if (newTaskText === "") {
        alert("Please enter a task!")
        return;
    }
// Create a new task in the database
    const newTaskResult = await tablesDB.createRow({
        databaseId: '692d3ecc0016d87885a9',
        tableId: 'tasks',
        rowId: ID.unique(),
        data: {
            "taskText": newTaskText,
            "isTaskDone": false
        }
    });
console.log(newTaskResult);


    const newListItem = createListItem(newTaskResult);

    if (isTodoListEmpty) {
        todoList.innerHTML = "";
        isTodoListEmpty = false;
    }

    todoList.prepend(newListItem); // <ul></ul>
    todoInput.value = "";
})

// Function to delete a task from the database
async function deleteTask($idToBeDeleted) {
     const result = await tablesDB.deleteRow({
        databaseId: '692d3ecc0016d87885a9',
        tableId: 'tasks',
        rowId: $idToBeDeleted
        // transactionId optional, so not needed
    });
console.log(result);
    
        const listItemToBeRemoved = document.getElementById($idToBeDeleted);// Select the list item to be removed from the UI
        if(listItemToBeRemoved) listItemToBeRemoved.remove();// Remove the list item from the UI
        // Check if the todo list is empty after deletion
        const listItems = document.querySelectorAll(".taskContainer")
       
        if (!listItems.length) {
            todoList.innerHTML = "<p>No todos. Please add some tasks.</p>";
            isTodoListEmpty = true;
        }
    }

// Function to toggle the completion status of a task in the database
async function toggleTask($idTobeToggled) {
    const checkbox = document.querySelector(`#${$idTobeToggled} input[type="checkbox"]`);
    const isTaskDone = checkbox.checked;
    const updatedTask = await tablesDB.updateRow({
        databaseId: '692d3ecc0016d87885a9',
        tableId: 'tasks',   
        rowId: $idTobeToggled,
        data: {
            "isTaskDone": isTaskDone
        }
    });
    console.log(updatedTask);
}
// Function to create a new list item element for a task
function createListItem(taskObject) {
    const newListItem = document.createElement("li"); // <li></li>
    newListItem.setAttribute("class", "taskContainer")// <li class="taskContainer"></li>
    newListItem.setAttribute("id", taskObject.$id)// <li id="unique-task-id"></li>

    // Checkbox
    const isTaskDoneCheckBox = document.createElement('input');
    isTaskDoneCheckBox.type = "checkbox";
    isTaskDoneCheckBox.addEventListener("change", () => toggleTask(taskObject.$id))
    isTaskDoneCheckBox.checked = taskObject.isTaskDone;

    // Text container
    const p = document.createElement('p');
    p.setAttribute("id", "taskContent")

    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskObject.taskText;

    const $createdAtSpan = document.createElement('span');
    $createdAtSpan.textContent = taskObject.$createdAt;
    console.log(taskObject.$createdAt)

    p.appendChild(taskTextSpan)
    p.appendChild($createdAtSpan)

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute("id", "taskDeleteBtn")
    deleteBtn.textContent = "X"

    deleteBtn.addEventListener("click", () => deleteTask(taskObject.$id))

    newListItem.appendChild(isTaskDoneCheckBox);
    newListItem.appendChild(p);
    newListItem.appendChild(deleteBtn);

    return newListItem;  //<li>Go to Market</li>
}
//Render the list of todos in the UI
function renderTodos(todos) {
    todoList.innerHTML = "";

    // I am rendering the UI for the Empty State / Data from the server.
    if (!todos.length) {
        todoList.innerHTML = "<p>No todos found. Please add some tasks.</p>"
        return;
    }

    isTodoListEmpty = false;
    todos.map((todo) => {
        const newListItem = createListItem(todo)
        todoList.prepend(newListItem) // <ul><li>Go to School</li> <li>Go to Market</li> </ul>
    })
}