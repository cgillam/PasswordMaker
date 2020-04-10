// Assignment Code
var generateBtn = document.querySelector("#generate");






// Write password to the #password input
function writePassword() {


    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
function generatePassword() {
    var numOfChar = prompt("how many charictors would you like to use? chose a minimum of 8 charictors and a max of 123");

    while (numOfChar < 8 || numOfChar > 128) {
        var numOfChar = prompt("how many charictors would you like to use? chose a minimum of 8 charictors and a max of 123");
    }





    var special = confirm("would you like to use any special charitors?")
    var num = confirm("would you like to use any numbers in your password?")
    var upper = confirm("would you like upper case letters in your password?")
    var lower = confirm("would you like lower case letters in your password")

    var numChar = "1234567890"
    var specialChar = "!@#$%^&*()"
    var upperChar = "QWERTYUIOPASDFGHJKLZXCVBNM"
    var lowerChar = "qwertyuiopasdfghjklzxcvbnm"


    var userChoice = []
    console.log(specialChar.length);





    //for loops
    if (special === true) {
        for (var i = 0; i < specialChar.length; i++) {
            userChoice.push(specialChar[i])
        }


    }

    if (num === true) {
        for (var j = 0; j < numChar.length; j++) {
            userChoice.push(numChar[j])
        }

    }

    if (upper === true) {
        for (var k = 0; k < upperChar.length; k++) {
            userChoice.push(upperChar[k])
        }

    }

    if (lower === true) {
        for (var l = 0; l < lowerChar.length; l++) {
            userChoice.push(lowerChar[l])
        }

    }

    console.log(userChoice);

    var finalSelection = []

    for (var b = 0; b < numOfChar; b++) {
        finalSelection.push(userChoice[Math.floor(Math.random() * userChoice.length)])
    }

    // finalSelection.push(userChoice[Math.floor(Math.random() * userChoice.length)])
    console.log(finalSelection.join(''));

    return finalSelection.join('')




}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
