"use strict";
//Define function to print each magician name from an array;
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magician) {
    magician.forEach(name => console.log(name));
}
//Define a array containing magician_names
let magician_names = ["Harry Poter", "Ayan", "Hamza"];
//call the function to print each megicians_names
show_magicians(magician_names);
