
// File Module

let MAGIC_NUMBER = Math.round(Math.random() * 100);

function logMyNumber(){
    console.log("Your lucky number is :", MAGIC_NUMBER );
}

function log() {
  console.log("Hello Node!");
}

function foo() {
  console.log("Foo Called");
}

module.exports = { log, foo, logMyNumber };
