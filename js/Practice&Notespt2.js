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
let password = "Tarkov"
function getPassword() {
    let attempt = ""
    for (let i = 0; i < 3; i++) { // i < 3 tells me I have three tries.
        attempt = prompt("Enter Password.")
        if (attempt === password) {
            break;

        }
        if (i === 2) {
            alert("Locked out")
            return;
        }
    }
    alert("You are in!")
}

getPassword()


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




















