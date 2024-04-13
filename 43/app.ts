

//Define the function to show magicians names
function show_magicians(megicians: string []) {
    megicians.forEach(name => console.log(name));
}

// Function to make magichans great through .map() it well modify array
function make_great (magicians: string []) {
    return magicians.map(name => `The Great ${name}`)
}

//Defina an array of show_magicians
let megicians_name = ["Herry poter","Ayan","Fahad", "Babar"];

//Making a copy of Orginal array through .Slice() function
let copy_megicians_name = megicians_name.slice()

//Modify the copied array to include "The Great" with thier names
let copy_great_magicians = make_great(copy_megicians_name);

// Show both arrays Orginal and Copied

// Orginal
console.log("\nOrginal Array\n")
show_magicians(megicians_name);

//Copied
console.log("\nCopied Array\n\t")
show_magicians(copy_great_magicians);