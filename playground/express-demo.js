const express = require("express");
const app = express();

// Basic http Server : http://localhost:3000 - GET
app.get("/", (request, response) => {
    console.log("Method : ", request.method);
    console.log("URL : ", request.url);
    response.send("Hello from Express!");
})

app.listen(3000, () => {
    console.log("Server started at port : 3000");
});