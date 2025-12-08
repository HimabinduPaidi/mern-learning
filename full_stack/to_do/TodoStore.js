let nextId = 1;//global variable
function Task(taskText, isTaskDone){//constructor function--->blueprint for creating task objects
    this.taskID = nextId++;
    this.taskText = taskText;
    this.isTaskDone = isTaskDone;
    this.timeStamp = new Date();

}
function TodoStore(){//constructor function
    this.todoStore = [];//array to store task objects
}
TodoStore.prototype.saveTodo = function(taskText, isTaskDone){  //method to save a new todo
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
    return true;
}
TodoStore.prototype.deleteTask = function(taskIdToDelete){
    const taskIndex = this.todoStore.findIndex((task)=> (task.taskID=== taskIdToDelete));
    this.todoStore.splice(taskIndex, 1);
    return true;
}                                                                      //method to delete task
module.exports = {//exporting the modules
    TodoStore,
    Task
}