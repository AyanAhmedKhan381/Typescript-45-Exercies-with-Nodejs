var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making a array of Countries and Print its Orginal order
var CountriesToVisite = ["china", "DenMark", "brazil", "Argentina"];
console.log("Orginal Order:", CountriesToVisite);
//Print the array in Alphabatical order without modifying the Actual array list
console.log("Alphabetical Order:", __spreadArray([], CountriesToVisite, true).sort());
//show that the array is istill in its Orginal order
console.log("Still are Orginal Order:", CountriesToVisite);
//print the array in Reversed Order with out modifying the Actual Array
console.log("Reverse Order:", __spreadArray([], CountriesToVisite, true).reverse());
//show that the array is istill in its Orginal order
console.log("Still are Orginal Order:", CountriesToVisite);
//We have Changed the Orginal order Now
console.log("Orginal Array Reversed:", CountriesToVisite.reverse());
//Print the array to show that its back to its orginal order
console.log("Back to Orginal Order:", CountriesToVisite.reverse());
//Print the array to show that its order has been changed all in Alphabatical Order now
console.log("Shorted in Alphabetical Order:", CountriesToVisite.sort());
//We have Changed agin the Orginal order Now in reverse order agin
console.log("Orginal Array Reversed:", CountriesToVisite.reverse());
