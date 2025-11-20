// Selecting HTML elements
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Array to store all tasks
let todos = [];

// Get saved todos from localStorage (if available)
const savedTodos = localStorage.getItem("todos");
if (savedTodos) {
    // Convert stored JSON string back to array
    todos = JSON.parse(savedTodos);

    // Display todos on screen
    renderTodos();
}

// When the form is submitted (Add button)
todoForm.addEventListener("submit", function(event) {

    event.preventDefault(); // Stops page reload

    const newTodoText = todoInput.value.trim(); // Remove spaces

    // If input is empty, stop the function
    if (newTodoText === "") {
        alert("Please enter a task!");
        return;
    }

    // Add new task to the beginning of array
    todos.unshift(newTodoText);

    // Save updated array to localStorage
    localStorage.setItem("todos", JSON.stringify(todos));

    // Clear input field
    todoInput.value = "";

    // Refresh the display
    renderTodos();
});

// Function to clear all todos
function clearTodos() {
    todoList.replaceChildren(); // Remove all <li> from screen
    todos = [];                 // Empty the array
    localStorage.setItem("todos", JSON.stringify(todos)); // Update storage
}

// Function to show todos on the screen
function renderTodos() {

    todoList.innerHTML = ""; // Clear current UI display

    // Load todos again from localStorage
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
        todos = JSON.parse(savedTodos); // Convert back to array
    }

    // Loop through each todo and add it to the screen
    for (let index = 0; index < todos.length; index++) {
        const newListItem = document.createElement("li"); // Create <li>
        newListItem.textContent = todos[index];          // Add text
        todoList.appendChild(newListItem);               // Add to list
    }
}
