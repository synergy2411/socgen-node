// https://www.surveymonkey.com/r/WN2HC7V

// File Module
const someObj = require("./module-basics");
someObj.log();
someObj.foo();
someObj.logMyNumber();


// Core Module
const path = require("path");
let url = "http://www.example.com/public/index.html";

console.log(path.dirname(url));
console.log(path.extname(url));
console.log(path.basename(url));

const os = require("os");
console.log("Architecture : ", os.arch());
console.log("Number of CPU's : ", os.cpus().length);


// External Module - install theses module by NPM command
const chalk = require("chalk");
const yargs = require("yargs");

console.log(chalk.red("Some Error Message"));
console.log(chalk.green("Some Success Message"));


console.log(process.argv);
console.log(yargs.argv.title);
