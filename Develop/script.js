var generateBtn = document.querySelector("#generate");
console.log(generateBtn);
generateBtn.addEventListener("click", writePassword);
  // Arrays that can be put into password generator.
    upperChar =  'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    lowerChar =  'abcdefghijklmnopqrstuvwxyz';
    numberChar = '0123456789';
    specChar =   "`~!@#$%^&*_-+";

  //declaration of variables.
    var length = "";
    var upperCharact;
    var lowerCharact;
    var numberCharact;
    var specCharact;

    

function generatePassword() {
  // variables to determine how each array is represented
  var length = (prompt ("How many Characters would you like in your password?"));
    if (length < 8 || length > 128) {
    alert("Please choose between 8 and 128");
    generatePassword();
    };
    // confirms each element to put into password.
  var upperCharact = confirm("Would you like uppercase letters?");
  var lowerCharact = confirm("Would you like lowercase letters?");
  var numberCharact = confirm("Would you like numbers?");
  var specCharact = confirm("Would you like to add special Characters?");
  
  
   // one place for all arrays.
  var allPasswordCharacters = [];
  
    //confirm password character choices.
    if (upperCharact) {
      allPasswordCharacters += upperChar;
    }
    
    if (lowerCharact) {
      allPasswordCharacters += lowerChar;
    }

    if (numberCharact) {
      allPasswordCharacters += numberChar;
    }

    if (specCharact) {
      allPasswordCharacters += specChar;
    }
      if (!upperCharact && !lowerCharact && !numberCharact && !specCharact) {
      alert("Please choose one character type!");
     return;
    };
    // console.log(allPasswordCharacters);

    var userPass = "";

    for (var i = 0; i < length; i++) {
    userPass += allPasswordCharacters.charAt(Math.floor(Math.random() * allPasswordCharacters.length));
      // console.log(userPass);
    }

    return userPass;
  }

  function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

    
  
  
   function randomized(length) {
    
    
   }

  

  

// Assignment code here

 
// Get references to the #generate element

// Write password to the #password input


// Add event listener to generate button

