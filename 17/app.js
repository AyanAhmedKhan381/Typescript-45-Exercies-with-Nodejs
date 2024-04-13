// Creating a Guest List Array
var guestlist = ["Ali", "Ahsan", "Gohar", "Omi", "Anila"];
//making variable for those guest who cant come
var dontCome = guestlist[2];
//Print the name of guest who cant come
console.log(dontCome, "Nhi Ahh Sakta");
// Add or Remove Values From Guest List Array
guestlist.splice(0, 1, "junaid");
//Message Print For a Bigger Table
console.log("Good New ! We have Found a bigger table For Dinner");
//Adding anew guest at starting index of Array
guestlist.unshift("Faisal");
//Adding a new guest at ending index of Array
guestlist.push("Khuram");
//Get a Middle Middle index of our guest list Array
var middleIndex = Math.floor(guestlist.length / 2);
//Adding a new guest to middle index to array
guestlist.splice(middleIndex, 0, "Basit");
//print message of updated list
console.log("Updated list of our guest list");
//Sending a invitation message to our guests one by one with their names
guestlist.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ",Would You Like to dinner with me")); });
//inform that only two gueste can be invite for dinner
console.log("Unfortunately,the new dinner table wont arrive on time,so i can only invite to guestes to dinner with me");
//using while-loop to removed guests from the array untile only two names remain
while (guestlist.length > 2) {
    var removedguest = guestlist.pop();
    console.log("Soory, ".concat(removedguest, " i cant invite you to dinner"));
}
//Sendind a Printing a invitation to the last two gueste on the list
console.log("invitation to the last 2 guests");
guestlist.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ",You are stile invited to dinner")); });
//Removing last two gueste from the list
guestlist.pop();
guestlist.pop();
console.log("Emp:ty list", guestlist);
