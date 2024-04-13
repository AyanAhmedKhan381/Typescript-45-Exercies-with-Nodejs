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

// Call make_great function to modyfy magicians names
let Great_magicians = make_great(megicians_name);

// Call show magicians that show list of magicians
show_magicians(Great_magicians);