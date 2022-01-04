// let i = 1;
// while(i <= 65536){
//     console.log(i)
//     i *= 2;
// }

//Didn't understand how to do this one so Casey walked us through it.

//An ice cream seller can't go home until she sells all of her cones.
// First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop.
// Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients.
// Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get the random numbers for this exercise.

// This is how you get a random number between 50 and 100
let allCones = Math.floor(Math.random() * 50) + 50;
let conesBought;
do {
    // This expression will generate a random number between 1 and 5
     conesBought = Math.floor(Math.random() * 5) + 1;
    console.log("You bought " + conesBought +" cones\n")

    if(conesBought > allCones)
    continue;

allCones -= conesBought;
    console.log("There are " + allCones + " left\n")
}while(allCones > 0)
console.log(allCones)




