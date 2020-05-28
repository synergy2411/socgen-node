// https://github.com/synergy2411/socgen-node

// Functions : First class citizens in JS

// Function Expression
// var addition = function (num1, num2) {
//     return num1 + num2;
// }

// console.log(add(5,7));
// console.log(addition(4,6));

// Nested Function 
// Function Hoisting

// function mystery(){
//     var chooseNumber = function (){                    // x087xxx00
//         return 12;
//     }
//     return chooseNumber;
//     var chooseNumber = function (){
//         return 7;
//     }
// }

// var chooseNumber = mystery();
// console.log(chooseNumber());            // 12


// IIFE - 
// (function(){
//     var x = 200;
//     console.log("IIFE Called")
// })();


// Block Scoping variables : let / const


// ARROW functions : with/out curly braces
// let numbers = [2,3,4,5,6];
// // ES5 Syntax
// let doubleValue = numbers.map(function(value, index,array){
//     return value * 2;
// });

// // ES6 Syntax
// // with curly braces
// let tripleNumber = numbers.map( (value) => {
//     return value * 3;
// })
// // without curly braces
// let newArray = numbers.map(value => value * 4);


// console.log(doubleValue);
// console.log(tripleNumber);
// console.log(newArray);

// console.log("Program starts");

// // Async code
// // HOF
// setTimeout(()=>{
//     console.log("3 seconds left");
// }, 3000);

// console.log("Program ends")



// OBJECTS : literal, constructor, instance
// var user = {
//     firstName : "Foo",
//     lastName  : "Bar",
//     sayHi : function(){
//         return "Hi " + this.firstName + " " + this.lastName;
//     }
// }

// user.middleName = "Bam";

// delete user.middleName;

// console.log(user.sayHi());
// console.log(user);


// Constructor Method (ES5)
// function Person(fname, lname){
//     // var this = {};
//     this.fname = fname;
//     this.lname = lname;
//     // return this;
// }

// Person.prototype.getFullName = function(){
//     return this.fname + " " +this.lname;
// }

// var foo = new Person("Foo", "Bar");
// console.log(foo.getFullName());
// var baz = new Person("Baz", "Bam");

// var str = "Some string";            // String Constructor
// console.log(str.length);


// Instance Method : JS engine maintains the prototype chaining internally (Object.create())

// var Shoe = {
//     size : 8,
//     constuction : "Sneaker"
// }

// var magicShoe = Object.create(Shoe);

// console.log(Shoe.isPrototypeOf(magicShoe));
// console.log(magicShoe.isPrototypeOf(Shoe));
// console.log(Object.prototype.isPrototypeOf(Shoe));
// console.log(Object.prototype.isPrototypeOf(magicShoe));



// console.log(magicShoe.size);        // 8
// console.log(magicShoe);         //  {}
