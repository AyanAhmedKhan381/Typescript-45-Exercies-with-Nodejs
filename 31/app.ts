let username = ["Gohar", "Hashir", "Ahsan","Ali","Admin"];

username = []

if (username.length ===0) {
console.log("Your Array is empty We need to find some user!");

}else {
      //Using ForEach loop on array

username.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`Hello ${oneUser}, Would you like to see status report?`)
    } else {
console.log(`Hello ${oneUser}, thank you for logging in again`)

    }
}) 


}
