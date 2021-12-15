// Write a function called count(input) that takes in a string and returns the number of characters.
//     Test to ensure this function will:
// return the accurate length of the string
// return a false in the event the argument given is not a string
// Account for: numbers, booleans, undefined, null

// Scott and Daniel helped me out with this which was nice of them.
function count(input){
    if (typeof input !== 'string'){
        return false;
    }else {
        return input.length;
    }
}

function testCount(countInput){
    let acutalCount = count("Hello I am a robot.");

    let expectedCount = 17;

    console.log("The acutal length is equal to the expected length: " + (acutalCount === expectedCount));
}
testCount();

console.log(count("Hello I am a robot."))
