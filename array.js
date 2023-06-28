let nameArray = []
let passwordArray = []
let cont = 0

while (true) {
    // Options
    let userOption = parseInt(prompt("Type 1 to register, 2 to login, 3 to delete an user or 4 to log out: "))
    // Register
    if (userOption === 1) {
        let userName = prompt("what is your name ID?: ")        
        let userPassword = prompt("what is your password?: ")
        nameArray[cont] = userName
        passwordArray[cont] = userPassword
        cont++
    }
    // Login 
    else if (userOption === 2) {
        let loginUser = false
        let userLoginID = prompt("type your ID: ")
        let userLoginPassword = prompt("type your password: ")
        for (let i = 0; i < nameArray.length; i++) {
            if (userLoginID === nameArray[i] && userLoginPassword === passwordArray[i]) {
                loginUser = true
            } 
        }
        if (loginUser) {
            console.log("You're log in")
        } else {
            console.log("The ID or Password do not exist, try a valid ID and Password.")
        }
    } 
    // Delete an user
    else if (userOption === 3) {
        // auxiliar arrays
        let auxiliarArrayID = []
        let auxiliarArrayPassword = []
        // user to delete
        let idToDelete = prompt("Insert the ID you want to delete: ")
        // check if the user was deleted or not
        let userToDelete = false
        let cont2 = 0
        for (let i = 0; i < nameArray.length; i++) {
            // if the user have been found
            if (idToDelete === nameArray[i]) {
                userToDelete = true
            } 
            // if not, add the ID and password to the auxiliar arrays
            else {
                auxiliarArrayID[cont2] = nameArray[i]
                auxiliarArrayPassword[cont2] = passwordArray[i]
                cont2++;
            }
        }
        // checking if the user was deleted or not
        if (userToDelete) {
            nameArray = auxiliarArrayID
            passwordArray = auxiliarArrayPassword
            console.log("The user you typed was deleted")
        } else {
            console.log("The user you typed was not found")
        }
    } 
    // Stop the program
    else if (userOption === 4) {
        break;
    } 
    // None of the options were choose
    else {
        console.log("You have not typed any of the options above, try again.")
    }
}

console.log(nameArray)
console.log(passwordArray)
