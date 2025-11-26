const express = require("express");                                                                                  //import express module
const path = require("path");                                                                                         //import path module
const { TodoStore } = require("./TodoStore.js");                                                                      //import TodoStore class

console.log("Welcome to your first backend server...")

const app = express();                                                                                               //create an express application
const publicAbsolutePath = path.join(__dirname, "public");                                                           //get the absolute path of the public directory
const hostThePublic = express.static(publicAbsolutePath);                                                            //middleware to serve static files

const todoStoreInstance = new TodoStore();                                                                            //create an instance of TodoStore class
//middlewares--->functions that have access to request and response objects
app.use(hostThePublic);
app.use(express.json());
//routes--->ipi endpoints
const PORT = 3000;
app.get("/welcome", (request, response)=>{
    response.json({                                                                                                //sending json response
        message: "Welcome to first api calling......."
    })
})
//get all todos
app.get("/api/v1/todos", (req, res)=>{
    const allTodos = todoStoreInstance.getAllTodos();                                                                   //get all todos using the instance method
    res.status(200).json({
        success: true,
        allTodos      //Array of task objects                                                                                                  //sending all todos in the response
    })
})

//post request to create a new todo
app.post("/api/v1/todos", (req, res)=>{                                                                                
    const {taskText, isTaskDone}= req.body;                                                                                           //destructuring assignment
    if(typeof taskText !== "string" || taskText.trim() ===""){                                                                        //input validation
        return res.status(400).json({                                                                                                   //bad request
            error: true,
            message: "Task text should be string and it should not be empty"
        })
    }
    const newTask = todoStoreInstance.saveTodo(taskText, isTaskDone);                                                       //save the new task using the instance method

    res.status(201).json({                                                                                             //201-->resource is created successfully
        success: true,                                                                                                       //200 --->request is successful
        message: "Task is created successfully",                                                                              //400-->bad request
        newTask: newTask
    })
})
app.get("/",(request,response)=> {                                                                                          //route to serve index.html
    console.log(path.join(__dirname, "public","index.html"))                                                                //checking the path
    response.sendFile(path.join(__dirname, "public","index.html"))                                                            //serving index.html file
});
app.listen(PORT , function() {                                                                                              //starting the server
    console.log("Server is running at port:", PORT);                                                                        //listening on port 3000

});


