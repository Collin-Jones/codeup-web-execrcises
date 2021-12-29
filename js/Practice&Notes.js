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

// var random = Math.floor((Math.random() * 3) +1);
// function isMultipleOfThree(x) {
//     if (x === 3) {
//         return true
//     } else {
//         return false
//     }
// }
//
// console.log(isMultipleOfThree(random))

// "user strict";
//
// function isDivisibleByThree(x) {
//     return x % 3 === 0;
// }
//
// function isDivisibleByThreev3(x) {
//     if (x % 3 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// console.log(isDivisibleByThree(2));
// console.log(isDivisibleByThreev3(2));


//Loops section
// let wallet = 32;
// let priceOfwater = 11;
//
// while(wallet >= priceOfwater){
//
//     console.log('*********');
//     console.log("I'd like to buy your very reasonably priced refreshment!");
//     console.log("them : we are fair and reasonable. Enjoy!");
//     console.log("wallet currently: " + wallet)
// }
// console.log("If you ain't got no money, take yo broke ... home")

// let counter = 0;
//
// while (counter <= 25){
//     if (counter % 2 === 0){
//         console.log(counter)
//     }
//     counter++;
//}
//
// let counter = 0;
//
// while (counter <= 25){
//     if (counter % 2 !== 0){
//         console.log(counter)
//     }
//     counter++;
// }

// function isName(name) {
//     if (name === "Collin") {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isName(name))


//
// let input = prompt("Enter any sea animal.")
//
// function seaCreatures(animals) {
//     switch (animals) {
//         case "Octopus":
//             return "What has 8 legs and looks like an alien in the sea?"
//             break;
//         case "Whale":
//             return "They are the largest mammal on the planet."
//             break;
//         case "Mantis Shrimp" :
//             return "The Mantis Shrimp punches can reach an acceleration of 10,400 g and a velocity of 51 mph (83 km/h). That is around 50 times faster than the blink of an eye."
//             break;
//         default:
//             return "I don't know anything about that animal."
//     }
// }
//
// console.log(seaCreatures(input))
// alert(seaCreatures(input))


// let num = 1;
// let counter = 0;
// while (counter <= 50) {
//     if (isPrime(num)) {
//         console.log(num)
//         num++;
//         counter++;
//     }else{
//         num++;
//     }
// }
//
//
// function isPrime(num) {
//     for (var i = 2; i < num; i++)
//         if (num % i === 0) return false;
//     return num > 1;
//}


// function returnTwo(x) {
//     if (x = 2) ;
//     return 2;
// }
//
// console.log(returnTwo())
//
// function sayHowdy() {
//     return "Howdy!"
// }
//
// console.log(sayHowdy())
//
// function returnName() {
//     return "Collin"
// }
//
// console.log(returnName())
//
// function addThree(x) {
//     return x + 3
// }
//
// console.log(addThree(5))
//
// function sayString() {
//     return "codeup"
// }
//
// console.log(sayString())
//
// function identity(input) {
//     if (input = "Escape from Tarkov") ;
//     return input
// }
//
// console.log(identity())
//
// function cube(n) {
//     if (n = 3) ;
//     return n * n * n;
// }
//
// console.log(cube())
//
// let random = Math.floor((Math.random() * 3) + 1);
//
// function getRandomNumber(min, max) {
//     if (min * max) ;
// }
//
// console.log(random)
// console.log(getRandomNumber())
//
//
// function first(input) {
//     if (input = "Tarkov") ;
//     return input
// }
//
// console.log(first())
//
//
// function add(a, b) {
//     if (a = 4 , b = 5) ;
//     return a + b;
// }
//
// console.log(add())
//
// function subtract(q, e) {
//     if (q = 100, e = 50) ;
//     return q - e;
// }
//
// console.log(subtract())
//
// function multiply(t, u) {
//     if (t = 15, u = 25) ;
//     return t * u;
// }
//
// console.log(multiply())
//
// function divide(o, p) {
//     if (o = 60, p = 30) ;
//     return o / p;
// }
//
// console.log(divide())
//
//
// let input = prompt("What car model do you have?");
// let inputv2 = prompt("2D or 4D")
//
// function typeOfCar(car) {
//     switch (car) {
//         case "Car":
//             return "GLI";
//             break;
//         case "2D":
//             return "2D";
//             break;
//         case "4D":
//             return "4D"
//             break;
//         default:
//             return "Sorry don't know what type of car that is."
//     }
// }
//
// console.log(input)
// console.log(inputv2)

function sqaureRoot(n) {
    if (n = 10) ;
    return Math.sqrt(n);
}

console.log(sqaureRoot())

function cubeRoot(q) {
    if (q = 2) ;
    return Math.cbrt(q)
}

console.log(cubeRoot())

function half(r) {
    if (r = 10) ;
    return (r / 2)
}

console.log(half())

function triple(b) {
    if (b = 50) ;
    return (b * 3)
}

console.log(triple())

function double(o){
    if (o = 60);
    return (o * 2);
}

console.log(double())

function timesOne(p){
    if (p = 30);
    return (p * 1);
}

console.log(timesOne())