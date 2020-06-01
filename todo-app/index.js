const express = require("express");
const environment = require("./environment/environment");
const bodyParser = require("body-parser");
require("./db/mongoose");
const Todo = require("./model/todo.model");
const todoRouter = require("./router/todo.router");
const bookRouter = require("./router/book.router");
const userRouter = require("./router/user.router");

const app = express();

// Parses the body and attach it with request object
app.use(bodyParser.json());

// the todoRouter will work for all /todos API's
app.use("/todos", todoRouter);

app.use("/books", bookRouter);

app.use("/users", userRouter);

app.get("/", (req, res) => {});

app.listen(environment.PORT, () => {
  console.log("Server started at Port : " + environment.PORT);
});

