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
// Call make_great function to modyfy magicians names
var Great_magicians = make_great(megicians_name);
// Call show magicians that show list of magicians
show_magicians(Great_magicians);
