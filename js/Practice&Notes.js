//Just hands on practice from the class. Helps me learn better if I actually type it out while listening.

// let num1 = 22;
// console.log(num1++); // post-increment
// // num1 original value is output to the console,
// // then it is incremented
// console.log(num1);
// console.log(++num1); // pre-increment
//First, num1 is incremented
//Then, num1 new value is accessed in order to be logged
//Finally, num1 is logged to the console


// let numStr = "7.99"; // string
// let discount = .10; // number
//
// let numAmount = parseFloat(numStr);
// let discountedAmount = numAmount - (numAmount * discount)
//
// console.log(Math.max(discountedAmount));

// let intStr = "7.51";
// console.log(parseInt(intStr));
// parseInt always rounds down.
// NaN is a number, a special number
// null
// undefined

// let age = 22
// let hasDriverLicense = true;
// let moneyInWallet = 10.00;
//
// // they must be at least 21 yrs old
// // and have their driver license
// // and have at least 5 dollars
// let canGetADrink = (age >= 21)
//     && (hasDriverLicense)
//     && (moneyInWallet >= 5.00)
//
// console.log(canGetADrink)


// let didTheDishes = true;
// let vacuumed = false;
// let cleanedTheRoom = false;
//
// if (didTheDishes || vacuumed || cleanedTheRoom){
//     console.log("Thank God, we're making progress")
// }else{
//     console.log("Why did I have kids")
// }

//Must have a credit score over 680 and have at least $4000 on-hand
//OR, they must have at least $10000 on-hand
// let creditScore = 500;
// let cashOnHand = 2000;
// if ((cashOnHand > 4000 || creditScore > 680)) {
//     console.log("\n Will be able to extend the auto loan");
// } else{
//     console.log("\n Will not be able to extend the auto loan");
// }
//just hands on practice for myself.
// function wakeUp(){
//     console.log("Collin waking up")
// }
//
// function getEggs() {
//     console.log("\nTurn on the stove")
//     console.log("\nTurn dial to the right temp")
//     console.log("\nGet the eggs out of the fridge")
//     console.log("\nCook eggs")
// }
//
// getEggs()

//Argument and Parameters
// function cubed(x){
//     return x * x * x;
// }
// console.log(cubed(8));
//
// var increment = function(x) {
//     return x + 1;
// };
//
// var two = increment(1);

// "use strict";
//
// function sayHello(name){
//     return ("Hello, " + name + "!")
// }
// console.log(sayHello("Collin"))
//
// var helloMessage = sayHello("Collin")
// console.log(helloMessage)

//
// function isFive(x){
//     if (x = 5) {
//         return true
//     } else {
//         return false
//     }
//
// }
// console.log(isFive())

// = is used for assigning values to a variable in JavaScript.
// == is used for comparison between two variables irrespective of the datatype of variable.
// === is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values.