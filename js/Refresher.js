// Maths!
//     Write a function called add(num1, num2) which returns the sum of num1 and num2
// Write a function named square(numToSqr) which takes in a number (numToSqr) and returns the number multiplied by itself
// Write a function called sumOfSquares(a, b).
//     You should find the square of a, then the square of b.
//     Invoke add(num1, num2) and pass the new squared values in as arguments.

function add(num1, num2) {
    return num1 + num2;
}

console.log(add(5, 5));

function square(numToSqr){
    return numToSqr * 10;
}

console.log(square(10))

function sumOfSquares(a, b){
    return a + b;
}

console.log(sumOfSquares(10, 10))