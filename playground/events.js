const EventEmitter = require("events").EventEmitter;
const stream = require("stream");
const fs = require("fs");
const gzip = require("zlib").createGzip();

const readStream = fs.createReadStream("./eventloop.js");
const writeStream = fs.createWriteStream("./newEventLoop.js");
// Connecting two stream through pipe operation
readStream.pipe(writeStream);

// Transforming the output of pipe operation
readStream.pipe(gzip).pipe(writeStream);


// console.log(new stream.Stream() instanceof EventEmitter);
// console.log(new stream.Readable() instanceof stream.Stream);
// console.log(new stream.Writable() instanceof stream.Stream);
// console.log(new stream.Transform() instanceof stream.Stream);
// console.log(new stream.Duplex() instanceof stream.Stream);



// const emitter = new EventEmitter();

// function handler(){
//     console.log("Handler worked.")
// }

// // Register the event Handler
// emitter.on("foo", () => {
//     console.log("Foo Event emitted.")
// })

// emitter.on("bar", handler);

// // Emit the event
// emitter.emit("foo");
// emitter.emit("bar")

// Global Exception handler
// process.on("uncaughtException", (err)=>{
//     console.log("UNCAUGHT EXCEPTION OCCURED", err);
// })

// process.on("exit", (code) => {
//     // write code to clean memory
//     console.log("Process exited with code : ", code)
// })

// process.exit(1);

// nonExistingFunc();


// console.log(process instanceof EventEmitter);




