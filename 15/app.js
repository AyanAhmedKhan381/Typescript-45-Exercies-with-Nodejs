var guestlist = ["ali", "Hashir", "Gohar", "Omi", "Anila"];
var dontCome = guestlist[2];
console.log(dontCome, " Nhi Ahh Sakta");
guestlist.splice(2, 1, "Ahsan");
guestlist.forEach(function (guest) { return console.log(" Salam ".concat(guest, ", would you like to dinner with me?")); });
