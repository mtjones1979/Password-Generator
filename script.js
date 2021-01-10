// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {

  //set arrays for function
  // have to establish the length, character type: numbers, uppercase, lowercase, and special characters
  var charOptions = {
    "spec": ["`","~","!","@","#","$","%","^","*","&","*","(",")","<",">","+"],
    "num": ["1","2","3","4","5","6","7","8","9"],
    "upper": ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    "lower": ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    "endPassword": []  
  };
  
  let finalPassword = "";
  
  // ask how many characters and set up else statemens if other than number between 8 and 128 is chosen
  
  var userInput = Number(prompt("How many password characters do you want? Chose between 8 to 128!"));

  // generated alerts to start password generation, corrects if they chose something not within parameters
    if (userInput === null) {
      alert ("You pressed cancel. Please try again.");
      return generatePassword();
    } else if (userInput < 8 || userInput > 128) {
      alert ("Please try again. Your password must be between 8 to 128 characters!");
      return generatePassword();
    } else if (isNaN(userInput)){
      alert("Please enter a valid number!");
      return generatePassword();
    } 
    
    else if (userInput >= 8 || userInput <= 128) {
    var upperChar = confirm("Do you want uppercase letters?");
    var lowerChar = confirm("Do you want lowercase letters?");
    var numChar = confirm("Do you want numbers?");
    var specChar = confirm("Do you want special characters?")
    
    console.log(userInput);
    }
 
  // random password done by math.random with a floor by using arrays set up earlier
  function randomPassword(){
    for (var index=0; finalPassword.length < userInput; index++) {
      var randomIndex = Math.floor(Math.random() * endPassword.length);
      var generatedChar = endPassword[randomIndex];
      finalPassword += generatedChar;
      index++;
      console.log(index, finalPassword);
      }
  }

  // have to create all possiblities of choices from above with if/else statements
  // finally realized I could combine arrays under one concat
  
  if (upperChar && lowerChar && numChar && specChar) {
      var endPassword = charOptions.endPassword.concat(charOptions.upper, charOptions.lower, charOptions.num, charOptions.spec);
    }
    else if (!(upperChar) && lowerChar && numChar && specChar) {
      var endPassword = charOptions.endPassword.concat(charOptions.lower, charOptions.num, charOptions.spec);
    } 
    else if (!(upperChar) && !(lowerChar) && numChar && specChar) {
      var endPassword = charOptions.endPassword.concat(charOptions.num, charOptions.spec);
    }
    else if (!(upperChar) && !(lowerChar) && !(numChar) && specChar) {
      var endPassword = charOptions.endPassword.concat(charOptions.spec);
    }
    else if (upperChar && !(lowerChar) && !(numChar) && !(specChar)) {
      var endPassword = charOptions.endPassword.concat(charOptions.upper);
    }
    else if (upperChar && lowerChar && !(numChar) && !(specChar)) {
      var endPassword = charOptions.endPassword.concat(charOptions.upper, charOptions.lower);
    }
    else if (upperChar && lowerChar && numChar && !(specChar)) {
      var endPassword = charOptions.endPassword.concat(charOptions.upper, charOptions.lower, charOptions.num);
    } 
    else if (!(upperChar) && lowerChar && !(numChar) && !(specChar)) {
      var endPassword = charOptions.endPassword.concat(charOptions.lower);
    }
    else if (!(upperChar) && lowerChar && numChar && !(specChar)) {
      var endPassword = charOptions.endPassword.concat(charOptions.lower, charOptions.num);
    }
    else if (!(upperChar) && !(lowerChar) && numChar && !(specChar)) {
      var endPassword = charOptions.endPassword.concat(charOptions.num);
    }
    else if (upperChar && !(lowerChar) && !(numChar) && specChar) {
      var endPassword = charOptions.endPassword.concat(charOptions.upper, charOptions.spec);
    }
    else if (upperChar && !(lowerChar) && numChar && !(specChar)) {
      var endPassword = charOptions.endPassword.concat(charOptions.upper, charOptions.num);
    } 
    else if (!(upperChar && lowerChar && numChar && specChar)) {
      alert("Please chose at least one unique identifier option!");
      // realized return generatePassword keeps from showing additonal alerts
      return generatePassword();
    } 
   
 randomPassword();
 return finalPassword;
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





