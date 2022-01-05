function oddNumber(numberV2) {
    for (let i = 1; i <= 50; i++) {
        if (numberV2 === i){
            console.log("Yikes, skip this number: " + numberV2)
            continue;
        }
        if (i % 2 !== 0) {
            console.log("Here is an odd number: " + i)
        }

    }
}

oddNumber(27)
// Was going in the right direction, William helped me just a bit