//Define the function to show magicians names
function show_magicians(megicians) {
    megicians.forEach(function (name) { return console.log(name); });
}
// Function to make magichans great through .map() it well modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Defina an array of show_magicians
var megicians_name = ["Herry poter", "Ayan", "Fahad", "Babar"];
//Making a copy of Orginal array through .Slice() function
var copy_megicians_name = megicians_name.slice();
//Modify the copied array to include "The Great" with thier names
var copy_great_magicians = make_great(copy_megicians_name);
// Show both arrays Orginal and Copied
// Orginal
console.log("\nOrginal Array\n");
show_magicians(megicians_name);
//Copied
console.log("\nCopied Array\n\t");
show_magicians(copy_great_magicians);
