//Creating a Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];


//Using Foor-loop.
for(let oneNumber of numbers) {
    let OrdinalEnding : string;

if (oneNumber ===1){
    OrdinalEnding = "st"
}
else if (oneNumber ===2) {
    OrdinalEnding = "nd"
}
else if (oneNumber ===3) {
    OrdinalEnding = "rd"
}
else {
    OrdinalEnding = "th"
}

console.log(`${oneNumber}${OrdinalEnding}`)



};
