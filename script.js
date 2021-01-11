// Assignment Code

var generateBtn = document.querySelector("#generate");

let passswordLength
let upperCase 
let lowerCase
let specialChar
let numberChar

// array = "h1"
// 0, 1 => 1,2
// math.floor(math.random()array.length)
let upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerCaseCharacters = "abcdefghijklmonpqrstuvwxyz"
let specialCharacters = "#$!@!$^&"
let numberCharacters = "0123456789"

// Write password to the #password input
function writePassword() {
  // window.confirm questions
  passswordLength = window.prompt("Password Length must be 8-128")
  upperCase = window.confirm("Do you want uppercase characters in your password?")
  lowerCase = window.confirm("Do you want lowercase characters?")
  specialChar = window.confirm("Do you want special case?")
  numberChar = window.confirm("Do you want numbers?")
  // generate randomally genrated string
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



function generatePassword()
{
  let password = ""
  for (let i = 0; i < passswordLength; i++)
  {
    let randomNumber = Math.floor(Math.random() * 4 + 1)
    
    if(upperCase && 1 == randomNumber)
    {
      password += upperCaseCharacters[Math.floor(Math.random() * upperCaseCharacters.length)]
    }
    if(lowerCase && 2 == randomNumber)
    {
      // password = "password" + "h" == password += "h"
      // password == "passwordh"
      password += lowerCaseCharacters[Math.floor(Math.random() * lowerCaseCharacters.length)]
    }
    if(specialChar && 3 == randomNumber)
    {
      password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)]

    }
    if(numberChar && 4 == randomNumber)
    {
      password += numberCharacters[Math.floor(Math.random() * numberCharacters.length)]
    }
  }

  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
