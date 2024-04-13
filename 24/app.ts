//Define Variables

let apple ="apple";
let upercaseApple = "Apple";
let ten = 10;
let twenty = 20;
let fruits = [ "apple", "banana", "orange"];

//Teste for equality and inequality with Strings

console.log("Is apple is equal to apple");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple");
console.log(apple != "apple");


//Testes using Lowercase functions
console.log("Is Apple is equal to apple after converting to lowercase?");
console.log(upercaseApple.toLowerCase() =="apple");

console.log("\n Is Apple is not equal to apple after converting to lowercase?");
console.log(upercaseApple.toLowerCase ()!="apple");

// Numaricals Tests
// Equal to
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);

// not Equal to
console.log("\n Is ten is not equal to twenty");
console.log(ten != twenty);

// Grater than
console.log("\nn Is ten is grater than zero?");
console.log(ten > 0);

// Less than

console.log("\n Is twenty is less than ten?");
console.log(twenty < 10);

//Greator than or equal to

console.log("\n Is ten is grator than or equal to 5?");
console.log(ten >= 5);

// Less than or equal to

console.log("\n Twenty is less than or equal to 10 ? ");
console.log(twenty <= 10);

// Tests using "and" & "or" Operators
//Using && (and)
console.log("\n twenty is not equal to 10 and twenty is greator than 10");
console.log(twenty != 10 && twenty > 10);


console.log("\n twenty is not equal to 10 and twenty is greator than 30");
console.log(twenty != 10 && twenty > 30);

//Using || (OR)
console.log("/n 20 is grater than 50 OR 20 is equal to 20")
console.log(20 > 50 || 20 ==20);

console.log("/n 20 is grater than 50 OR 20 is not equal to 20")
console.log(20 > 50 || 20 !=20);

//Test whether an ithem is include in my array
console.log("/nIs orange include in my fruits Array ");
console.log(fruits.includes ("orange"))

//not include
console.log("/nIs orange not include in my fruits Array ");
console.log(!fruits.includes ("orange"))





