"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color) {
//     color = color.toLowerCase()
//     if (color === "blue") {
//         return "blue is the color of the sky"
//     } else if (color === "red") {
//         return "strawberries are red"
//     } else if (color === "yellow") {
//         return "Bananas are yellow"
//     } else {
//         return "I don't know anything about " + color
//     }
// }
//
// console.log(analyzeColor("blue"))


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// function analyzeColor(colors) {
//     if (colors === "red") {
//         return "strawberries are red"
//     } else if (colors === "green") {
//         return "the leafs on the tree are green"
//     } else if (colors === "yellow") {
//         return "Bananas are yellow"
//     } else if (colors === "blue") {
//         return "the color of the sky is blue"
//     } else {
//         return "I don't know anything about " + colors
//     }
// }
//
// console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// function analyzeColor(colors) {
//     switch (colors){
//         case "blue":
//             return "The color of the sky is blue"
//         break;
//         case "green":
//             return "The leafs on the tree are green"
//         break;
//         case "yellow":
//             return "Bananas are the color yellow"
//         break;
//         default:
//             return "I don't know anything about those " + colors
//     }
// }
//
// console.log(analyzeColor(randomColor))
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// let input = prompt("Enter a color, any color.");
// alert(analyzeColor(input))

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// var luckyNumber = Math.floor(Math.random() * 6);
//
// function calculateTotal(number) {
//     switch (number) {
//         case 0:
//             return "Sorry but you do not get a discount"
//             break;
//         case 1:
//             return "You get a 10% discount"
//             break;
//         case 2:
//             return "You get a 25% discount"
//             break;
//         case 3:
//             return "You get a 35% discount"
//             break;
//         case 4:
//             return "You get a 50% discount"
//             break;
//         case 5:
//             return "Wow look at that! Everything is free!"
//     }
// }
//
// console.log(luckyNumber)
// console.log(calculateTotal(luckyNumber))

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
var luckyNumber = Math.floor(Math.random() * 6);
function calculateTotalv2(number, total) {

    switch (number) {
        case 0:
            return "Sorry but you do not get a discount"
            break;
        case 1:
            return total * .90
            break;
        case 2:
            return total * .75
            break;
        case 3:
            return total * .65
            break;
        case 4:
            return total * .50
            break;
        case 5:
            return "Wow look at that! Everything is free!"
            break;
    }
}

let inputTotalBill = prompt("Enter the total on the bill.")
alert("Your lucky number is " + luckyNumber)
alert("Your total bill amount is  " + inputTotalBill)
alert(calculateTotalv2(luckyNumber, inputTotalBill ) + " is now your new total.")
console.log(calculateTotalv2(luckyNumber, inputTotalBill))

// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// let input = confirm("Do you want to enter any number?");
// if (input === true){
//     let userAnswer = prompt("What is the number?");
//     let parseIntAnswer = parseInt(userAnswer);
//     if (isNaN(parseIntAnswer)){
//         alert("You didn't type in a number.");
//     }else {
//         alert("You did put a number");
//         if (parseIntAnswer % 2 === 0){
//             alert("This is even.");
//         }else {
//             alert("This is odd.");
//         }
//
//         alert(parseIntAnswer + 100);
//
//         if (parseIntAnswer < 0 ){
//             alert("This is negative");
//         }else{
//             alert("This is positive");
//         }
//     }
// }
//



