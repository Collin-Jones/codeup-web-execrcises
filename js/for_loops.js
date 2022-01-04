//for (Control var, conditions, expression){
//}
//^ this is for "for loops"

//'for loop' exercises


function showMultiplictionsTable(number){
    for (let a = 1; a <= 10; a++){
        console.log(number + " x " + a + " = " + (number * a));
    }
}
showMultiplictionsTable(7)

// function randomNumber() {
//     for (let a = 1; a <= 10; a++) {
//         let numberV2 = Math.floor(Math.random(20) * 200)
//         if (numberV2 % 2 === 0) {
//             console.log(numberV2 + " is an even number.")
//         } else if (numberV2 % 2 !== 0) {
//             console.log(numberV2 + " is an odd number.")
//         }
//     }
//
// }
//
// randomNumber()


// Wesley helped me a lot with this one. I will come back to this and try it as a switch statement
// for (i = 1; i < 10; i++){
//     if (i === 1){
//         console.log(1)
//     }else if(i === 2){
//         console.log(22)
//     }else if(i === 3){
//         console.log(333)
//     }else if(i === 4){
//         console.log(4444)
//     }else if (i === 5){
//         console.log(55555)
//     }else if (i === 6){
//         console.log(666666)
//     }else if(i === 7){
//         console.log(7777777)
//     }else if(i === 8){
//         console.log(88888888)
//     }else if(i === 9){
//         console.log(999999999)
//     }
// }

//Tried to do a switch case, it's not working though.
// function numbers() {
//     for (let i = 1; i < 10; i++) {
//         switch (i) {
//             case i === 1:
//                 return 1;
//
//             case i === 2:
//                 return 22;
//
//             case i === 3:
//                 return 333;
//
//             case i === 4:
//                 return 4444;
//
//             case i === 5:
//                 return 55555;
//
//             case i === 6:
//                 return 666666;
//
//             case i === 7:
//                 return 7777777;
//             default:
//                 break;
//         }
//     }
//
// }
//
// console.log(numbers())


// for (i = 100; i >= 5; i -= 5){
//     console.log(i)
// }


