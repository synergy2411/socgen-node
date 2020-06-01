const express = require("express");
const environment = require("./environment/environment");
const bodyParser = require("body-parser");
require("./db/mongoose");
const Todo = require("./model/todo.model");
const app = express();

// Parses the body and attach it with request object
app.use(bodyParser.json());

app.get("/", (req, res) => {});

// Get all todo items
app.get("/todos", (req, res) => {
  Todo.find()
    .then((response) => {
        return res.send(response);
    })
    .catch((err) => {
      return res.status(404).send({ err });
    });
});

// Creating todo item
app.post("/todos", (req, res) => {
    if(req.body){
        const todo = new Todo(req.body);
        todo.save().then(response => {
            return res.send(response).status(201);
        }).catch(err => {
            return res.send({err}).status(501);
        });
    }else{
        res.send({message : "No body found"}).status(404);
    }
});


// Fetching single item 
app.get("/todos/:id", (req, res) => {
    if(req.params && req.params.id){
        const _id = req.params.id;
        Todo.findById({_id}).then(response => {
            return res.send(response).status(200);
        }).catch(err=>{
            return res.send({message : "No item found"}).status(404);
        })
    }else{
        return res.send({message : "No ID found"}).status(404);
    }
});



app.patch("/todos/:id", (req, res) => {});
app.delete("/todos/:id", (req, res) => {});

app.listen(environment.PORT, () => {
  console.log("Server started at Port : " + environment.PORT);
});

// GET /todos
// GET /todos/:id
// POST /todos
// PATCH /todos/:id
// DELETE /todos/:id
