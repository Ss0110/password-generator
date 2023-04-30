// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Password length
  var length = Number(prompt("Enter the length of your password between 8-128 characters. "))
  //Character types
  var charType = prompt("What should we include in your password? Type 'uppercase, lowercase, numbers, symbols' to include. ")


  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  function generatePassword(){
    var charGen = {
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numbers:'0123456789',
      symbols: '!@#$%^&*()-_=+',
    };
   
    var charSet = charGen[charType.toLowerCase()];
   
    console.log(charSet);

    var retVal = "";


    for (i = 0; i < length; i++) {
      retVal += charSet.charAt(Math.floor(Math.random() * charGen.length));
    }
    return retVal;
  }


  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var button = document.getElementById("button")
button.addEventListener("click"), function(event){
  alert(event.target);
}

