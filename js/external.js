// console.log("Hello from external JavaScript")

// alert("Welcome to my website!")

// let input = prompt("What is your favorite color?")
// console.log("Great, " + input + " is my favorite color too!")

//Casey definitely helped a lot on this one
// let time = prompt(" In order to join the class you have to sign up between 9:00am to 12:00pm");
// if (time >= 12 || time < 9){
//     alert("Sorry please choose another time.")
// }else {
//     alert("Great, Welcome to the class!")
// }
//
// let item = prompt("In order for the discount to be applied, you must buy more than two items. How many items did you buy?");
// if (item >= 2 || item >= 2){
//     alert("Discount will be applied.")
// }else {
//     alert("Discount will not be applied.")
// }

"use strict";

function sayHello(name){
    return ("Hello, " + name + "!")
}
console.log(sayHello("Collin"))

var helloMessage = sayHello("Collin")
console.log(helloMessage)

var myName = "Collin"
console.log(sayHello(myName))

var random = Math.floor((Math.random() * 3) + 1);
function isTwo(x) {
    if (x === 2) {
        return true
    } else {
        return false
    }
}
console.log(isTwo(random))

function calculateTip(x) {
    if (x = .20);
    return(x * 20)
}
console.log(calculateTip())