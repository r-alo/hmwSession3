// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for character options for password
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


//Function to choose what to include on password
function characterOptions() {

  var result = {
    length: 0,
    choices: ""}

      var length = prompt("Choose password length between 8 and 128 characters"); 
        if ((length < 8)||(length > 128))
        alert("Must be between 8 and 128!")
        else{

      result.length = length;

      var numbers = confirm("Do you want your password to include numbers?");

      var lowerCase = confirm("Do you want your password to include lower case letters?");

      var upperCase = confirm("Do you want your password to include upper case letters?");

      var specials = confirm("Do you want your password to include special characters?");


      if(numbers) result.choices = result.choices + number;
      
      if(lowerCase) result.choices = result.choices + lower;

      if(upperCase) result.choices = result.choices + upper;

      if(specials) result.choices = result.choices + special;
        
      if(!result.choices)
      alert("Must choose at least one type.");
      
    }
  return result;
}

//Function to generate password
function generatePassword() {
  var passwordOptions = null;
  var finalPassword = "";

  do{
  passwordOptions = characterOptions();
  console.log(passwordOptions);
  }

  
  while
    (((passwordOptions.length < 8) || (passwordOptions.length > 128)) || (!passwordOptions.choices))

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }


  for (var i = 0; i < passwordOptions.length; i++) {

    finalPassword += passwordOptions.choices[getRandomInt(0, passwordOptions.choices.length-1)];
  }
  
  console.log(finalPassword);

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);