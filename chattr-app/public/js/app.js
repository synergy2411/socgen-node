$(document).ready(() => {
    console.log("APP LOADED")
    const socket = io.connect("/");

    socket.on("acknowledge", (data) => {
        alert("Server says : " + data.message);
    })

    socket.emit("thanks", {message : "Thanks for connecting me"});

    $("#btnSend").on("click", event => {
        event.preventDefault();
        const message = $("#txtMsg").val();
        socket.emit("fromClient", {message});
    })

    socket.on("fromServer", ({message}) => {
        $("#taMsg").append("Server Says : " + message + "\n")
    })
})



// npm install nodemon -g