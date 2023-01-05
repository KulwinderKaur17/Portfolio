var firstName = prompt("Welcome to the site! What is your first name?");
var lastName = prompt("What is your last name?");
var age = prompt("How old are you?");
var height = prompt("How tall are you?");
var petName = prompt("What is the name of your pet?");
alert("Thank you so much for the information.");
// if (firstName[0] === lastName[0]) {
//   if (age > 20 && age < 30) {
//     if (height >= 170) {
//       if (petName[petName.length - 1] === "y") {
//         console.log("Welcome Spy!");
//       }
//     }
//   }
// }

if ((firstName[0] === lastName[0]) && (age > 20 && age < 30) && (height >= 170) && (petName[petName.length - 1] === "y")) {
  console.log("Welcome Spy!");
}