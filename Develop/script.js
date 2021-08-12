var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let upparray = upperChar.split("");
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
let lowarray = lowerChar.split("");
var numberChar = "1234567890";
let numarray = numberChar.split("");
var specChar = "!@#$%^&*_-+~";
let specarray = specChar.split("");



var allPasswordCharacters = [];



// Assignment code here
function generatePassword() {
  var charLength = prompt("How many Characters would you like in your password?");
  if (charLength < 8 || charLength > 128) {
    alert("Please choose between 8 and 128");
    generatePassword();
  }
  var upperCase = confirm("Would you like uppercase letters?");
    console.log(upperCase);
  if (upperCase) {
    allPasswordCharacters.push(upparray);
}
  var lowerCase = confirm("Would you like lowercase letters?");
    console.log(lowerCase);
  if (lowerCase) {
    allPasswordCharacters.push(lowarray);
}
  var numbers = confirm("Would you like numbers?");
  if (numbers) {
    allPasswordCharacters.push(numarray);
}
  var specialLetters = confirm("Would you like to add special Characters?");
  if (specialLetters) {
    allPasswordCharacters.push(specarray);
    console.log(allPasswordCharacters);
}

  randomized(charLength);
  return "";
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
