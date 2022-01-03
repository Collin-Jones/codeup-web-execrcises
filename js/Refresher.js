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
let input = prompt("Please enter your password.")
function getPassword(aPassword){
if (aPassword = 1234){
  return alert("Correct password")
}else if (!aPassword){
    return alert("Wrong password")
}

}

console.log(getPassword(input))