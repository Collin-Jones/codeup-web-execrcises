//Exercises 1
var a = 1;
console.log(a);
var b = a++;
console.log(b);
var c = ++a;
console.log(c);
// what is the value of a, b, and c?

var d = "hello";
var e = false;
console.log(d++);
console.log(e++);
    d++;
    e++;

// Exercise 2
let sample = "\nHello Codeup";
{
    sample = sample.length;
}
console.log(sample)
let sameple = "Hello Codeup";
{
sameple = sameple.toUpperCase()
}
console.log(sameple)


sameple = "\nHello Codeup";
{
    sameple = sameple.toLowerCase()
}
console.log(sameple)

sample = "\nHello Codeup ";
{
    console.log(sample + "Students.")
}

sample = "\nHello Codeup ";
{
    console.log(sample + "Class")
}

sample = "\nHello Codeup";
{
    console.log(sample.indexOf("c"))
}

sample = "\nHello Codeup";
{
    console.log(sample.indexOf("C"))
}

sample = "\nHello Codeup";
{
    console.log(sample.substring(6, 13))
}

//Exercise 3
// Renting movies for a certain amount of days
let mermaid = 3
let brotherBear = 5
let hercules = 1
    sum = (mermaid + brotherBear + hercules);
// $3 per day
let t = sum * 3;
console.log("\nTo be able to keep these movies you must pay $" + t + " per day." );



//How much payment would you receive in payment for this week
let Facbook = 10 * 350 , Google = 6 * 400, Amazon = 4 * 380;
let total = (Facbook + Google + Amazon);
console.log("\nThe payment amount comes out to $" + total + ".");


// Trying to enroll in a class
let student = 1 , enrolled = 15 , course = student + enrolled;
let doesNotConflict = false;
if (course > 17 || !doesNotConflict){
    console.log("\nAll seats are filled. Choose a different class.")
}else {
    console.log("\nYou have been placed into the class!")
}


let product = 3, discount = .50, items = 4, price = 3;
let equal;
let pay;
if(product < items){
    pay = (price * discount);
    equal = price - pay;
    console.log("\nThey bought 4 items so they receive 50 percent discount, their total is " + equal + ".")
} else {
    equal = price
}

// Exercise 4
var username = 'codeup';
var password = 'notastrongpassword';

if ((password.includes(username)) && (password.length > 5) && (username.length <= 20)){
    console.log("\nIncorrect format.")
}else {
    console.log("\n*loading screen* ")
}