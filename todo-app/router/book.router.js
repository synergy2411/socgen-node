const express = require("express");
const bookRouter = express.Router();

bookRouter.route("/")           // http://localhost:9090/books
    .get((req, res) => {
        res.send({message : "Book router working"})
    })
    .post(()=>{})

module.exports = bookRouter;