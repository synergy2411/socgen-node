$(document).ready(() => {
    // console.log("APP LOADED")
    const username = prompt("Please enter your name : ");
    const socket = io.connect("/");

    socket.on("acknowledge", (data) => {
        console.log("Server says : " + data.message);
    })

    socket.emit("thanks", {message : "Thanks for connecting me"});

    $("#btnSend").on("click", event => {
        event.preventDefault();
        const message = $("#txtMsg").val();
        socket.emit("fromClient", {message, username});
        $("#txtMsg").val('');
    })

    socket.on("fromServer", ({message, username}) => {
        $("#taMsg").append(username + " : " + message + "\n")
    })
})



// npm install nodemon -g