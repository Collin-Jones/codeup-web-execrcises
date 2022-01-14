
// Maths!
//     Write a function called add(num1, num2) which returns the sum of num1 and num2
// Write a function named square(numToSqr) which takes in a number (numToSqr) and returns the number multiplied by itself
// Write a function called sumOfSquares(a, b).
//     You should find the square of a, then the square of b.
//     Invoke add(num1, num2) and pass the new squared values in as arguments.

// function add(num1, num2) {
//     return num1 + num2;
// }
//
// console.log(add(5, 5));
//
// function square(numToSqr){
//     return numToSqr * numToSqr;
// }
//
// console.log(square(10))
//
// function sumOfSquares(a, b){
//     return (a * a) + (b * b);
// }
//
// console.log(sumOfSquares(10, 10))

// 1. Write a function named getFizzBuzz(startingNum) which performs the following actions:

// 2. If startingNum is divisible by 3
// a. console log "fizz"

// 3. Else, if startingNum is divisible by 5
// a. console log "buzz"

// 4. If startingNum is divisible by 3 AND divisible by 5
//a. return a string which says "FIZZ BUZZ"

// 5. Thinking about getFizzBuzz(startingNum), let's console log the return value of this function

// 6. What if getFizzBuzz doesn't return a value (VOID)?
// a. How do you want to handle that?

// function getFizzBuzz(startingNum) {
//     if (startingNum % 3 === 0) {
//         console.log("Fizz");
//     } else if (startingNum % 5 === 0) {
//         console.log("Buzz");
//     }
//     if (startingNum % 3 === 0 && startingNum % 5 === 0) {
//         return "FIZZ BUZZ"
//     }
// }
//
// console.log(getFizzBuzz(15));

// 1. Define a function named getPassword() which performs the following actions:
//   a. Using prompt(), alert(), variables, and a while-loop, ask the user to input their password until their entry matches your hard-coded password value.
//     HINT: start by defining the correct password and don't forget to link your html file


// function getPassword(){
//     let userInput = prompt("What is your dang password?")
//     let password = "Tarkov"
//     let attempts = 1
//     while (userInput !== password && attempts < 3){
//         userInput = prompt("What is your dang password?");
//         attempts++;
//     }
// }
// getPassword()


// function getPassword(){
//     let input = prompt("Please enter your password.")
//     let password = "Tarkov"
//     while (input === password) {
//         alert("That's right!");
//         break;
//         if (input !== password) {
//     alert("That's not right!");
//         }
//     }
// }
//
// getPassword();

//Ry's walk through, copied for reference.
// function getPasswordInput(){
//     let correctPassword = "password"
//     let userInput = prompt("Enter the dang password.")
//     while (userInput !== correctPassword){
//         alert("Thats not right!")
//     }
// }
// getPasswordInput()


//     1. Write a function named getMeaningOfLife which accepts one parameter, meaningfulNum.
//     a. This function will use a while loop to compare its current number (a variable named counter) against the meaningfulNum.

//     2. While the counter is not equivalent to the meaningfulNum, continue the loop.
//     a.Once that condition is broken, console log a string telling the user "The meaning of life, the universe, and everything is [your meaningful number]"

//     3. Thinking about the above function, getMeaningOfLife, let’s ask a question: What happens if the value of meaningfulNum is a non-numeric?
//     a. Write some code to account for this case. How the function handles the situation is up to you!

//     4. Let’s continue with getMeaningOfLife: If the value of meaningfulNum happens to be 42, console log a separate message at the end of the function to say: "Did you bring your towel?"


// function getMeaningOfLife(meaningfulNum) {
//     let counter = 0;
//     while (counter !== meaningfulNum) {
//         counter++
//     }
//     console.log("The meaning of life, the universe, and everything is " + meaningfulNum);
//     if (counter === 42) {
//         console.log("Did you bring a towel?")
//     }
// }
//
//
// getMeaningOfLife(42);


//TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> only logs *if the iteration number is odd*

// function randomOddNumber(numberIteration) {
//     for (let i = 0; i < numberIteration; i++) {
//         let number = Math.floor(Math.random(10) * 200)
//         if (number % 2 !== 1) {
//             console.log(number + " is an odd number")
//         }
//     }
// }
//
// randomOddNumber(5)


// TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> logs "This is an even iteration" on the evens
//      -> logs "This is an odd iteration" on the odds

// function randomNumber(numIteration) {
//     for (let a = 1; a <= numIteration; a++) {
//         let numberV2 = Math.floor(Math.random(1) * 200)
//         if (numberV2 % 2 === 0) { // if control var is even.
//             console.log(numberV2 + " is an even number.")
//         } else if (numberV2 % 2 !== 0) { // if control var is odd.
//             console.log(numberV2 + " is an odd number.")
//         }
//     }
//
// }
//
// randomNumber(10)
//


// TODO: MINI EXERCISE
//      Make a new version of your getPassword function using a for-loop!
//      -> The purpose of the for-loop is to only allow a maximum number of attempts
//          -> If the max attempt used unsuccessfully, alert the user of such and RETURN or BREAK
//      -> Once the user enters the correct password, use the 'break' keyword to end the loop
//      -> After the loop concludes, alert the use they have entered the correct password
// let password = "Tarkov"
// function getPassword() {
//     let attempt = ""
//     for (let i = 0; i < 3; i++) { // i < 3 tells me I have three tries.
//         attempt = prompt("Enter Password.")
//         if (attempt === password) {
//             break;
//
//         }
//         if (i === 2) {
//             alert("Locked out")
//             return;
//         }
//     }
//     alert("You are in!")
// }
//
// getPassword()


//continue
//break - finishes the loop.
// console.log("start of the loop")
// for (let i = 0; i < 3; i++) {
//     console.log("start of loop body");
//
//     if (i % 2 ===0){
//         continue;
//     }
//     if (i === 1){
//         break;
//     }
//     console.log("i = " + i)
//     console.log("end of loop body")
// }
// console.log("end of the loop")


// Array's

// []
// [1]
// ['someString'1, 2, 3, 4, true, false]

//example of array
// let animals = ['Whale', 'Dog', 'Cats'];
//
// let numbers = [1, 2, 4, 5];
//
// console.log(animals.length)
// console.log(numbers.length)
// console.log(animals[1])
// console.log(numbers[3])
//
// //First element
// // console.log(animals[0])
//
// //Second element
// // console.log(animals[1])
//
// console.log(animals[animals.length - 1])

// Mini Exercise // I did video games because I don't really have favorite artists.
// -Create an array with five strings representing your favorite artists (music or otherwise) and store it in a variable called favoriteArtists
// -Write a function that accepts an array as a parameter and...
// -> logs the first, third, and last elements of that array
// -Invoke your function and pass favoriteArtists as an argument

// let favoriteVideoGames = ['Skyrim', 'Fallout', 'Escape from Tarkov', 'Rocket League', 'Rainbow Six Siege']
// function array(x){
//     console.log(x[0] + "\n" + x[2] + "\n" + x[x.length -1])
// }
// array(favoriteVideoGames)
//
// for (let i = 0; i < favoriteVideoGames.length ; i++) {
//     console.log(favoriteVideoGames[i])
// }


// let instructors = ["Casey", "Ry", "DocRob", "Justin", "Kenneth"]
//
// console.log("Original: ", instructors);
// // push && unshift return the new length of the array
// let newLength = instructors.push("Samuel")
// console.log(newLength);
//
//
// // push adds an element to the end of the array
// instructors.push("Laura");
// console.log("After pushes: ", instructors);
//
//
// // unshift adds an element to the beginning of the array
// instructors.unshift("David");
//
// console.log("After unshift: ", instructors);
//
//
// //Removing elements to an array
// // pop removes the last element from the array
// let removedItem = instructors.pop();
//
// console.log(removedItem);
//
// console.log("After pop: ", instructors);
//
//
// // Shift removes first element from array
// let removedFromBeginning = instructors.shift();
//
// console.log(removedFromBeginning);
//
// console.log("After Shift: ", instructors);
//
// // Locating Array Elements
//
// let ryIndex = instructors.indexOf('ry');
//
// console.log('Ry Index: ', ryIndex);
//
// let lastRy = instructors.lastIndexOf('Ry');
//
// console.log(instructors);
//
// console.log(lastRy)
//
// // Slice
//
// console.log(instructors);
//
// let slice = instructors.slice(2, 4);
//
// console.log('Sliced: ', slice);
//
// console.log(instructors);
//
//
// // Reverse && Sort
//
// console.log(instructors);
//
// instructors.sort();
//
// console.log(instructors);
//
//
// let numbers = [100, 200 , 300, 400, 50 , 25 ,15];
// numbers.sort();
// console.log(numbers);
//
// // Splitting && Joining
//
// let userInfo =  "Collin, Jones , 1234 blah blah address Rd , DOB"
//
// let userArray = userInfo.split(',')
//
// console.log(userArray);
//
// let firstName = userArray[0];
//
// let address = userArray[2];
//
// console.log(firstName)
//
// console.log(address)
//
// let joinedUserArray = userArray.join(',')
//
// console.log(joinedUserArray)


// Objects Lecture
"use strict";

// let car1 = {};
// car1.make = "Volkswagen";
// car1.model = "GLI";
// car1.year = 2019;
//
//
// console.log(car1)
//
// let car2 = {
//     make : "Jeep",
//     model : "Liberty",
//     year : 2004
// }
// console.log(car2)
//
// console.log("Make: " + car1.make);
// console.log("Model: " + car1.model);
// console.log("Year: " + car1.year);
//
//
//
// function printCar(car){
//     console.log("Make: " + car.make);
//     console.log("Model: " + car.model);
//     if(car.year){
//         console.log("Year: " + car.year)
//     }
// }

// Mini exercise

// Declare an array of two objects for movies
// that have the following member values:
//     title (string)
//     year released (int)
//     rating (string)
//     director (string)
//     imdb rating (decimal)
//     academy award win (boolean)

// function printMovies(movies) {
//     for (let i = 0; i < movies.length; i++) {
//         printMovie(movies[i])
//     }
// }
//
// function printMovie(movie){
//     console.log("\nThe movie title " + movie.title + ".");
//     console.log("The movie was released in " + movie.yearReleased + ".");
//     console.log("The imbd rating was " + movie.rating + ".")
//     console.log("The director was " + movie.director + ".")
// }


// let movies = [];
// movies[0] = {};
// movies[1] = {};
// movies[0].title = "Interstellar";
// movies[0].yearReleased = 2014;
// movies[0].rating = "8.6 out of 10";
// movies[0].director = "Christopher Nolan";
// movies[1].title = "Star Wars Return of the Jedi";
// movies[1].yearReleased = 1983;
// movies[1].rating = "8.3 out of 10 on imdb";
// movies[1].director = "Richard Marquand";
//
// printMovies(movies);
//
//
// // MATH
//
// //Return a random integer (x) between min and max inclusively
// //min <= x <= max
// function getRandomInt (min, max){
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
//
// console.log(getRandomInt(50, 100))

// Create a function called arrayToString.
//     The function takes a parameter called myArray.
//     It returns a string that is the concatenation of all the elements in myArray.
//     This function is essentially your own version of join.
//     Therefore, you cannot use join in your function body :slightly_smiling_face:
// New
// 9:02
// Hint: use a loop

// function arrayToString(myArray){
//     let canCatString = "";
// for (let i = 0; i < myArray.length; i++){
//     canCatString += myArray[i];
// }
//     return canCatString;
// }
//
// console.log(arrayToString(["Me ", "I ", "You ", "They ",]));


// Define a function named removeAll(array, value) that takes in two arguments. The first argument should be an array and the second argument should be a value you wish to remove
// Given the following array as an argument (do not define this array inside your function - pass it in as an argument)
// var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
// --removeAll(bugs, "ant") should return ["mosquito", "scorpion", "mosquito", "typo", "reference error", "type error"]
// --removeAll(bugs, "mosquito") should return ["ant", "scorpion", "ant", "ant", "typo", "reference error", "type error"]
// --removeAll(bugs, "roach") should return the original array b/c “roach” has no occurrances.

function removeAll(array, value) {
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== value) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}

let bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
console.log(removeAll(bugs, "ant"));