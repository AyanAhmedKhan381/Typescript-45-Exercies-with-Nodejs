// Define a function to create a car object with optional options...
function create_car(manufacturer, model, ...options) {

    //Initialize a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model
    };

    // add additional options to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });

    return car

}
 // Call the function to create a car object
 let  my_car = create_car("Toyota", "Carrolla", "Color: white", "Sunroof: True", "Year: 2024")
 
 // Print the Variable to ensure all the infomation is stored correctly in the car object
 console.log(my_car);