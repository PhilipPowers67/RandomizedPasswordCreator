var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upparray = upperChar.split("");
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var lowarray = lowerChar.split("");
var numberChar = "1234567890";
var numarray = numberChar.split("");
var specChar = "!@#$%^&*_-+~";
var specarray = specChar.split("");


var allPasswordCharacters = [];

// Assignment code here
function generatePassword() {
  var charLength = prompt("How many Characters would you like in your password?");
  if (charLength < 8 || charLength > 128) {
    alert("Please choose between 8 and 128");
    generatePassword();
  }
  var upperCase = confirm("Would you like uppercase letters?");
  // console.log(upperCase);
  if (upperCase) {
    allPasswordCharacters.push(upparray);
  // console.log(allPasswordCharacters);
}
  var lowerCase = confirm("Would you like lowercase letters?");
  // console.log(lowerCase);
  if (lowerCase) {
    allPasswordCharacters.push(lowarray);
    // console.log(allPasswordCharacters);
}
  var numbers = confirm("Would you like numbers?");
  if (numbers) {
    allPasswordCharacters.push(numarray);
  }



  randomized(charLength);
  return 
}


function randomized(length) {
  var passwordChar = []
  for (var i = 0; i < length; i++) {
  var char = Math.floor(Math.random() * allPasswordCharacters.length)
  passwordChar.push(char); 
  console.log("char", char);
}
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// generateBtn.addEventListener("click", charLengthPrompt);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
