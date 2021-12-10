console.log("Hello from external JavaScript")

alert("Welcome to my website!")

// let input = prompt("What is your favorite color?")
// console.log("Great, " + input + " is my favorite color too!")

//Casey definitely helped a lot on this one
let time = prompt(" In order to join the class you have to sign up between 9:00am to 12:00pm");
if (time >= 12 || time < 9){
    alert("Sorry please choose another time.")
}else {
    alert("Great, Welcome to the class!")
}

let item = prompt("In order for the discount to be applied, you must buy more than two items. How many items did you buy?");
if (item >= 2 || item <= 1){
    alert("Discount will be applied.")
}else {
    alert("Discount will not be applied.")
}

