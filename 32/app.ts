//Array of Current_Users
let current_users = ["Usman", "ali", "Areeba","Zain","Osama"];

//Array of New_Users
let new_users = ["Ayan","Hamza","Ali","Ayesha","Areeba"];


//Loop through new_users to check for usersname Avaibility

new_users.forEach(new_one_user => {

    //Making a Candition for username already exist and save in our_condition Variables
    let our_condition =current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
   
    //Print a different messages using If Else Statements

    if (our_condition) {
    console.log(`Sorry ${new_one_user} is alredy taken!`)

    }else {

        console.log(`This Username ${new_one_user} is availible`)
    }
    
    
});

























