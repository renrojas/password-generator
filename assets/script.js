// Assignment code 
var generateBtn = document.querySelector("#generate");

//Function length of password
function generatePassword() {
  var generatedPassword = "";
  var passwordLength = 0;
  // i need a loop to prompt and validate, i don't know how many times - while loop
  while(passwordLength <8 || passwordLength > 128) {
    passwordLength = prompt ("Please set the length between 8 to 128 characters, inclusive")
 
    if (passwordLength >= 8 && passwordLength <=128) {

    } else {
    alert("Please select a valid number equal or greater than 8 and less than or equal to 128")
    }
  }
  console.log(passwordLength)

  var lowerCase = window.confirm("Would you like to include lowercase letters?");
  console.log("lowercase?", lowerCase);

  var upperCase = window.confirm("Would you like to include uppercase letters?");
  console.log("uppercase?", upperCase);

  var numbers = window.confirm("Would you like to include numbers?");
  console.log("numbers?", numbers);

  var specialChars = window.confirm("Would you like to include special characters?");
  console.log("special characters?", specialChars);

var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberOptions = "1234567890"

var userString = ""

  if (lowerCase) {
    console.log("before",userString)
    userString = userString + lower
    console.log("after",userString)
  }
  if (numbers) {
    console.log("before", userString)
    userString = userString + numberOptions
    console.log("after", userString)
  }


  return generatedPassword
}
var lower = "abcdefghijklmnopqrstuvwxyz"
var random = Math.floor(Math.random() * lower.length);
console.log(lower[random])

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  //step 5: already provided 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/*
when user clicks button
1. request length for password, constraints 8 to 128 inclusive
  a) Request the data (done)
  b) validate that is between 8 and 128 (done)
2. ask for what type of characters to include
  a) ask if lowercase? Yes, NO
  b) ask if uppercase? Yes, No
  c) ask for numbers? Yes, No
  d) ask for special chars? Yes, No
3. Validate that at least one type has been selected
4. Generate the password
5. Show the password */