var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*?";

function generatePassword() {
  var passwordLength = parseInt(
    prompt(
      "How many characters do you want your password to be? (Min: 8, Max: 128)"
    )
  );

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128");
    return "";
  }

  var availableCharacters = "";
  if (confirm("Do you want to include uppercase letters?")) {
    availableCharacters += uppercase;
  }
  if (confirm("Do you want to include lowercase letters?")) {
    availableCharacters += lowercase;
  }
  if (confirm("Do you want to include numbers?")) {
    availableCharacters += numbers;
  }
  if (confirm("Do you want to include special characters?")) {
    availableCharacters += specialCharacters;
  }

  if (availableCharacters === "") {
    alert("At least one character type is required");
    return "";
  }

  var randomPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    var randomPosition = Math.floor(Math.random() * availableCharacters.length);
    randomPassword += availableCharacters[randomPosition];
  }

  return randomPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
