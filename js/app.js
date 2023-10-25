'use strict';

let userName = prompt("Hi , What is your name?");
console.log(userName);


let userResponse1 = prompt('Hi, ' + userName + '! Do you know Michelangelo?');
console.log(userResponse1);

let userResponse2 = prompt('Do you know if Michelangelo grew up in the Phillipines');
console.log(userResponse2);
if (userResponse2 && (userResponse2.toLowerCase() === 'yes' || userResponse2.toLowerCase() === 'y')) {
  alert('Correct! Michelangelo did  grow up in the Philippines.');
} else {
  alert('Incorrect. Michelangelo did grow up in the Philippines.');
}
let userResponse3 = prompt('Do you know if Michelangelo joined the Army right after high school?');
console.log(userResponse3);
if (userResponse2 && (userResponse2.toLowerCase() === 'yes' || userResponse2.toLowerCase() === 'y')) {
  alert('Inccorect! Michelangelo didn\'t joined the Army right after high school.');
} else {
  alert('Correct. Michelangelo didn\'t joined the Army right after high school.');
}

let userResponse4 = prompt('Do you know if Michelangelo was as a infantry in the Army? ');
console.log(userResponse4);
if (userResponse2 && (userResponse2.toLowerCase() === 'yes' || userResponse2.toLowerCase() === 'y')) {
  alert('Inccorect! Michelangelo was not a infantry in the Army.');
} else {
  alert('Correct. Michelangelo was not a infantry in the Army.');
}

let userResponse5 = prompt('Do you know if Michelangelo just left the military service?');
console.log(userResponse5);
if (userResponse2 && (userResponse2.toLowerCase() === 'yes' || userResponse2.toLowerCase() === 'y')) {
  alert('Inccorect! Michelangelo was not a infantry in the Army.');
} else {
  alert('Correct. Michelangelo was not a infantry in the Army.');
}

let userResponse6 = prompt('Do you know if Michelangelo in his career in the Army work directly under a General ?');
console.log(userResponse6);
if (userResponse2 && (userResponse2.toLowerCase() === 'yes' || userResponse2.toLowerCase() === 'y')) {
  alert('Correct! Michelangelo did work under a Gerneral.');
} else {
  alert('Incorrect. Michelangelo did work under a Gerneral.');
}

alert ('Thank You,' + userName + ', for completing  a quiz if you know Michelangelo');
