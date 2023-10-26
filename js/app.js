'use strict';

//let userName = prompt('Please enter your name:');

// function welcomeUser(userName) {
//if (userName === userName.charAt(0).toUpperCase() + userName.slice(1)) { // Capitalize the first letter
//  alert('Welcome, ' + userName + ' to the Yes or No Quiz');
//} else {
 // alert('You did not provide a name. Please refresh the page and try again.');
//}
// }

// welcomeUser();

let correctAnswers = 0;

// Question 1
function userResponse() {
  let userResponse2 = prompt('Do you know if Michelangelo grew up in the Philippines?').toLowerCase();
  console.log(userResponse2);
  if (userResponse2 === 'yes' || userResponse2 === 'y') {
    alert('Correct! Michelangelo did grow up in the Philippines.');
    correctAnswers++;
  } else {
    alert('Incorrect. Michelangelo did grow up in the Philippines.');
  }
}
userResponse();

// Question 2
let userResponse3 = prompt('Do you know if Michelangelo joined the Army right after high school?').toLowerCase();
console.log(userResponse3);
if (userResponse3 === 'no' || userResponse3 === 'n') {
  alert('Correct! Michelangelo didn\'t join the Army right after high school.');
  correctAnswers++;
} else {
  alert('Incorrect. Michelangelo didn\'t join the Army right after high school.');
}

// Question 3
let userResponse4 = prompt('Do you know if Michelangelo was as an infantry in the Army?').toLowerCase();
console.log(userResponse4);
if (userResponse4 === 'no' || userResponse4 === 'n') {
  alert('Correct! Michelangelo was not an infantry in the Army.');
  correctAnswers++;
} else {
  alert('Incorrect. Michelangelo was not an infantry in the Army.');
}

// Question 4
let userResponse5 = prompt('Do you know if Michelangelo just left the military service?').toLowerCase();
console.log(userResponse5);
if (userResponse5 === 'no' || userResponse5 === 'n') {
  alert('Correct! Michelangelo did not just leave the military service.');
  correctAnswers++;
} else {
  alert('Incorrect. Michelangelo did not just leave the military service.');
}

// Question 5
let userResponse6 = prompt('Do you know if Michelangelo, in his career in the Army, worked directly under a General?').toLowerCase();
console.log(userResponse6);
if (userResponse6 === 'yes' || userResponse6 === 'y') {
  alert('Correct! Michelangelo did work under a General.');
  correctAnswers++;
} else {
  alert('Incorrect. Michelangelo did work under a General.');
}



let userResponse7 = prompt('Guess the my lucky number');
let attempts = 0;
let luckyNumber = 3;
let maxAttempts = 5;

while (attempts < maxAttempts) {
  let userGuess = parseInt(userResponse7);
  if (userGuess === luckyNumber) {
    alert('Correct! ' + luckyNumber);
    correctAnswers++;
    break;
  } else if (userGuess < luckyNumber) {
    prompt('Too low. Try again.');
  } else {
    prompt('Too high. Try again.');
  }
  attempts++;
}

let userResponse8 = prompt('Guess the one common job in the Army?');
let attempts2 = 0;
let commonMos = ['infantry', 'cook', 'military police', 'unit supply', 'medic', 'combant engineer'];
let maxAttempts2 = 6;

while (attempts2 < maxAttempts2) {
  let userGuess = prompt(userResponse8).toLowerCase();
  if (commonMos.includes(userGuess)) {
    prompt('Correct! ' + userGuess + ' is a common job in the Army.');
    correctAnswers++;
    break;
  } else {
    prompt('Incorrect. Try again.');
  }
  attempts2++;
}

if (attempts2 >= maxAttempts2) {
  alert('You have exhausted your attempts. The correct answers were: ' + commonMos.join(', '));
}


alert('Thank You, ' + userName + ', for completing the quiz about Michelangelo.');
alert('You answered ' + correctAnswers + ' out of 7 questions correctly.');

