let guestlist = ["ali","Hashir","Gohar","Omi","Anila"];

let dontCome =guestlist[2];

console.log(dontCome," Nhi Ahh Sakta");

guestlist.splice(2, 1, "Ahsan");

guestlist.forEach(guest => console.log(` Salam ${guest}, would you like to dinner with me?`));

