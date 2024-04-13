"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Makin a Function
function make_shirt(size = "Large", prentMessage = "I Love TypeScript") {
    console.log(`Creating a ${size} shirt with the ${prentMessage} prints on shirt`);
}
//Calling a Function
make_shirt();
// Calling a Function now with medium size and default message
make_shirt("Medium");
//Calling a function now with Small size and also Different print message
make_shirt("Small", "I Love JavaScript");
