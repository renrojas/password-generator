// Assignment code 
var generateBtn = document.querySelector("#generate");

//Function length of password
function generatePassword() {
  var generatedPassword = "";
  var passwordLength = 0;
  // loop to prompt and validate, i don't know how many times - while loop
  while(passwordLength <8 || passwordLength > 128) {
    passwordLength = prompt ("Please set the length between 8 to 128 characters, inclusive")
 console.log(passwordLength)
    if (passwordLength >= 8 && passwordLength <=128) {
    } else if(passwordLength!==null){
    alert("Please select a valid number equal or greater than 8 and less than or equal to 128")
    } else {break}
  }
  if (passwordLength===null) {
    return ""
  }
  console.log(passwordLength)

  var lowerCase = false

  var upperCase = false;

  var numbers = false;

  var specialChars = false;

  while((lowerCase||upperCase||numbers||specialChars)== false) {
    lowerCase = window.confirm("Would you like to include lowercase letters?");
    console.log("lowercase?", lowerCase);
  
    upperCase = window.confirm("Would you like to include uppercase letters?");
    console.log("uppercase?", upperCase);
  
    numbers = window.confirm("Would you like to include numbers?");
    console.log("numbers?", numbers);
  
    specialChars = window.confirm("Would you like to include special characters?");
    console.log("special characters?", specialChars);
  
    if ((lowerCase||upperCase||numbers||specialChars)== false) {
      alert("Please select atleast one of the categories.")
  
    }
  }

var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberOptions = "1234567890"
var special = "~!@#$%^&*()_+-={}|[]\:;'<>,./?'"

var userString = ""

  if (lowerCase) {
    console.log("before", userString)
    userString = userString + lower
    console.log("after",userString)
  }
  if (upperCase) {
    console.log("before", userString)
    userString = userString + upper
    console.log("after", userString)
  }
  if (numbers) {
    console.log("before", userString)
    userString = userString + numberOptions
    console.log("after", userString)
  }
  if (specialChars) {
    console.log("before", userString)
    userString = userString + special
  }


for (var i = 0; i<passwordLength; i++){
  var random = Math.floor(Math.random() * userString.length);
  console.log(userString[random])
  generatedPassword=generatedPassword + userString[random]
}

  return generatedPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  //Shows password
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
  a) ask if lowercase? Yes, NO (done)
  b) ask if uppercase? Yes, No (done)
  c) ask for numbers? Yes, No (done)
  d) ask for special chars? Yes, No (done)
3. Validate that at least one type has been selected
4. Generate the password
5. Show the password */