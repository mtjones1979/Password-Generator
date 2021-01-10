// Assignment Code
//set objects for function
// have to establish the length, character type: numbers, uppercase, lowercase, and special characters
var generateBtn = document.querySelector("#generate");

var spec = ["`","~","!","@","#","$","%","^","*","&","*","(",")","<",">","+"];
var num = ["1","2","3","4","5","6","7","8","9"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var finalPassword = "";



// Write password to the #password input
// generated alerts to start password generation
// ask how many characters and set up else statemens if other than number between 8 and 128 is chosen

function generatePassword() {
  var userInput = Number(prompt("How many password characters do you want? Chose between 8 to 128!"));
 
    if (userInput === null) {
      alert ("You pressed cancel. Please try again.");
     window.location.reload();
    } else if (userInput < 8 || userInput > 128) {
      alert ("Please try again. Your password must be between 8 to 128 characters!");
     window.location.reload();
    } else if (isNaN(userInput)){
      alert("Please enter a valid number!");
     window.location.reload();
    } else if (userInput >= 8 || userInput <= 128) {
    var upperChar = confirm("Do you want uppercase letters?");
    var lowerChar = confirm("Do you want lowercase letters?");
    var numChar = confirm("Do you want numbers?");
    var specChar = confirm("Do you want special characters?")
    }
 
    
    
  

  // have to create all possiblities of choices from above with if/else statements
  if (!(upperChar && lowerChar && numChar && specChar)) {
    alert ("At least one unique character indentifier needs to be selected!");
  }
    else if (upperChar && lowerChar && numChar && specChar) {
      var endPassword = endPassword.concat(upper, lower, num, spec);
    }
    else if (!(upperChar) && lowerChar && numChar && specChar) {
      var endPassword = endPassword.concat(lower).concat(num).concat(spec);
    } 
    else if (!(upperChar) && !(lowerChar) && numChar && specChar) {
      var endPassword = charOptions.endPassword.concat(charOptions.num).concat(charOptions.spec);
    }
    else if (!(upperChar) && !(lowerChar) && !(numChar) && specChar) {
      var endPassword = charOptions.endPassword.concat(charOptions.spec);
    }
    else if (upperChar && !(lowerChar) && !(numChar) && !(specChar)) {
      var endPassword = charOptions.endPassword.concat(charOptions.upper);
    }
    else if (upperChar && lowerChar && !(numChar) && !(specChar)) {
      var endPassword = charOptions.endPassword.concat(charOptions.upper).concat(charOptions.lower);
    }
    else if (upperChar && lowerChar && numChar && !(specChar)) {
      var endPassword = charOptions.endPassword.concat(charOptions.upper).concat(charOptions.lower).concat(charOptions.num);
    } 
    else if (!(upperChar) && lowerChar && !(numChar) && !(specChar)) {
      var endPassword = charOptions.endPassword.concat(charOptions.lower);
    }
    else if (!(upperChar) && lowerChar && numChar && !(specChar)) {
      var endPassword = charOptions.endPassword.concat(charOptions.lower).concat(charOptions.num);
    }
    else if (!(upperChar) && !(lowerChar) && numChar && !(specChar)) {
      var endPassword = charOptions.concat(charOptions.num);
    }
    else if (upperChar && !(lowerChar) && !(numChar) && specChar) {
      var endPassword = charOptions.endPassword.concat(charOptions.upper).concat(charOptions.spec);
    }
    else if (upperChar && !(lowerChar) && numChar && !(specChar)) {
      var endPassword = charOptions.concat(charOptions.upper).concat(charOptions.num);
    }

    var userConfirmInput = (userInput++);

    function randomPassword(){
      for (index=0; index < userConfirmInput;) {
        var randomIndex = Math.floor(Math.random() * endPassword.length);
        var generatedChar = endPassword[randomIndex];
        finalPassword += generatedChar;
        index++;
        }
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


// create a var for each, create function to ask the prompts, have to make sure at least one type of prompt is used
// use math randomizer to get passcode



