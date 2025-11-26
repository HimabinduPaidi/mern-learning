let nextId = 1;//global variable
function Task(taskText, isTaskDone){//constructor function
    this.taskID = nextId++;
    this.taskText = taskText;
    this.isTaskDone = isTaskDone;
    this.timeStamp = new Date();

}
function TodoStore(){//constructor function
    this.todoStore = [];
}
TodoStore.prototype.saveTodo = function(taskText, isTaskDone){//method to save todo
    const newTask = new Task(taskText, isTaskDone);
    this.todoStore.push(newTask)
    return newTask;
}
TodoStore.prototype.getAllTodos = function() {//method to get all todos
    return this.todoStore;
}
TodoStore.prototype.toggleTask = function() {//method to toggle task
    const taskWithId = this.todoStore.find((task)=> (task.taskID=== taskIdToUpdate))
    taskWithId.isTaskDone = !taskWithId.isTaskDone
}

module.exports = {//exporting the modules
    TodoStore,
    Task
}