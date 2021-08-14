var generateBtn = document.querySelector("#generate");

  
    upperChar = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];
    lowerChar = ['abcdefghijklmnopqrstuvwxyz'.split('')];
    numberChar = ['1234567890'.split('')];
    specChar = ['!@#$%^&*~'.split('')];

  

function generatePassword() {
  // variables to determine how each array is represented

   var allPasswordCharacters = [];
   var userPass = [];
  
  // one array to hold all characters
  
  
  
  // determines which and how many characters there are.
  var length = prompt ("How many Characters would you like in your password?");

  if (length < 8 || length > 128) {
    alert("Please choose between 8 and 128");
    generatePassword();
    };
    // console.log(length);

  var upperCharact = confirm("Would you like uppercase letters?");
  var lowerCharact = confirm("Would you like lowercase letters?");
  var numberCharact = confirm("Would you like numbers?")
  var specCharact = confirm("Would you like to add special Characters?");

    if (!upperCharact && !lowerCharact && !numberCharact && !specCharact) {
      alert("Please choose one character type!");
      return;
    }

    
  
  if (upperCharact) {
    allPasswordCharacters .push(...upperChar);
}
  
  if (lowerCharact) {
    allPasswordCharacters .push(...lowerChar);
}
  ;
  if (numberCharact) {
    allPasswordCharacters .push(...numberChar);
}
  
  if (specCharact) {
    allPasswordCharacters .push(...specChar);
}

  // console.log(allPasswordCharacters);
   
  

    //  randomized(allPasswordCharacters);
    return userPass ;
  }

// Assignment code here

 function randomized(length) {
for (var i = 0; i < length.length; i++) {
  userPass.push(allPasswordCharacters[Math.floor(Math.random() * allPasswordCharacters.length)]);
  var password = userPass.join('');
  }
  console.log(userPass);
}
// Get references to the #generate element

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
