// Assignment Code
//set objects for function
// have to establish the length, character type: numbers, uppercase, lowercase, and special characters
var generateBtn = document.querySelector("#generate");
const charOptions = {
    "spec": "`,~,!,@,#,$,%,^,*,&,*,(),<,>,+,",
    "num": "1,2,3,4,5,6,7,8,9",
    "upper": "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z",
    "lower": "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z",
    }
var finalPassword = "";


// Write password to the #password input
function generatePassword() {
    var userInput = prompt("How many characters do you want?");
  if (8 < userInput < 128) {
    var upperChar = confirm("Do you want uppercase letters?");
    var lowerChar = confirm("Do you want lowercase letters?");
    var numChar = confirm("Do you want numbers?");
    var specChar = confirm("Do you want special characters?")
    } 
    
    
    
    
    
    else {
      alert ("Must be between 8 to 128 characters!")
    }



    function randomPassword(){
  for (i=0; i<userInput;) {
    var randomIndex = Math.floor(Math.random() * finalPassword.length);
    var generatedChar = finalPassword[randomIndex];
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



