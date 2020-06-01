const Todo = require("../model/todo.model");
const express = require("express");
const todoRouter = express.Router();

todoRouter
  .route("/")               // http://localhost:9090/todos
  .get((req, res) => {
    Todo.find()
      .then((response) => {
        return res.send(response);
      })
      .catch((err) => {
        return res.status(404).send({ err });
      });
  })
  .post((req, res) => {
    if (req.body) {
      const todo = new Todo(req.body);
      todo
        .save()
        .then((response) => {
          return res.send(response).status(201);
        })
        .catch((err) => {
          return res.send({ err }).status(501);
        });
    } else {
      res.send({ message: "No body found" }).status(404);
    }
  });

todoRouter
  .route("/:id")                //http://localhost:9090/todos/id
  .get((req, res) => {
    if (req.params && req.params.id) {
      const _id = req.params.id;
      Todo.findById({ _id })
        .then((response) => {
          return res.send(response).status(200);
        })
        .catch((err) => {
          return res.send({ message: "No item found" }).status(404);
        });
    } else {
      return res.send({ message: "No ID found" }).status(404);
    }
  })
  .patch((req, res) => {
    if (req.body && req.params.id) {
      const _id = req.params.id;
      Todo.findByIdAndUpdate({ _id }, req.body)
        .then((response) => {
          return res.status(201).send(response);
        })
        .catch((err) => {
          return res.send({ message: "No ID found" }).status(404);
        });
    }
  })
  .delete((req, res) => {
    if (req.params.id) {
      const _id = req.params.id;
      Todo.findByIdAndDelete({ _id })
        .then((response) => {
          return res.status(200).send(response);
        })
        .catch((err) => {
          return res.send({ message: "No ID found" }).status(404);
        });
    }
  });

module.exports = todoRouter;
