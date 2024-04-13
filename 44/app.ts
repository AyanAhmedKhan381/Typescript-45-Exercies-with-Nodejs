
//Define a function with a rest parameter that accept ithems arugments representing our sandwich
function makeSandwich (...ithems: string[]) {
    console.log("\nMaking a Sandwich with the following ithems\n")

    ithems.forEach(single_ithems => console.log(single_ithems))

    console.log("\nNow Enjoy Sandwich\n")

}
// Call the Function 3 ithems with 3 defferent number of argument 

makeSandwich("Chicken", "Cheese", "Mayo", "egg")

makeSandwich("Bread", "Butter")

makeSandwich("Bread", "Butter","Chicken", "Cheese", "Mayo", "egg","Tomato")