// Assignment code 
var generateBtn = document.querySelector("#generate");

//Function length of password
function generatePassword() {
  var generatedPassword = "";
  var passwordLength = 0;
  // loop to prompt and validate: while loop
  while(passwordLength <8 || passwordLength > 128) {
    passwordLength = prompt ("Please set the length between 8 to 128 characters, inclusive")
    if (passwordLength >= 8 && passwordLength <=128) {
    } else if(passwordLength!==null){
    alert("Please select a valid number equal or greater than 8 and less than or equal to 128")
    } else {break}
  }
  //ends loop if user clicks 'Cancel'
  if (passwordLength===null) {
    return ""
  }

  var lowerCase = false
  var upperCase = false;
  var numbers = false;
  var specialChars = false;

  //Asking user what type of characters to include
  while((lowerCase||upperCase||numbers||specialChars)== false) {
    lowerCase = window.confirm("Would you like to include lowercase letters?");
    upperCase = window.confirm("Would you like to include uppercase letters?");
    numbers = window.confirm("Would you like to include numbers?");
    specialChars = window.confirm("Would you like to include special characters?");
    
    //Validate that at least one type of characters has been selected
    if ((lowerCase||upperCase||numbers||specialChars)== false) {
      alert("Please select atleast one of the categories.")
    }}

//characters set: lowercase, uppercase, numbers, and special characters    
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberOptions = "1234567890"
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

//Adds characters based on user preferences
var userString = ""
  if (lowerCase) {
    userString = userString + lower
  }
  if (upperCase) {
    userString = userString + upper
  }
  if (numbers) {
    userString = userString + numberOptions
  }
  if (specialChars) {
    userString = userString + special
  }

//for loop to randomnize string based on password length
for (var i = 0; i<passwordLength; i++){
  var random = Math.floor(Math.random() * userString.length);

  generatedPassword=generatedPassword + userString[random]
}
  return generatedPassword
}

function writePassword() {
  var password = generatePassword();

  //Shows password
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);
