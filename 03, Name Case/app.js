//Lower Case
var personName = "Ayan khan";
console.log(personName.toLowerCase());
//Upper Case
console.log(personName.toUpperCase());
//Title case
console.log(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
