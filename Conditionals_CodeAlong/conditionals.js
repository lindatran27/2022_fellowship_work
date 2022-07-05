// var person1 = "Dylan";
// var person2 = "Ben";

// if (person1.length > person2.length) {
//     console.log(`${person1}'s name is longer than ${person2}'s name by
//     ${person1.length - person2.length} characters`);
// }

// console.log("this is the next line");

var num = 5;

// if (num > 30) {
//     console.log("This is a big number");
// } else if (num >= 20) {
//     console.log("this is a medium number");
// } else if (num >= 10) {
//     console.log("this is a sort of medium number");
// } else {
//     console.log("this is a small number");
// }

// if (num % 2 === 0) {
//     console.log("num is even");
// } else {
//     console.log("num is odd");
// }

// var evenOrOdd = num % 2 === 0 ? "num is even" : "num is odd"

// console.log("this is the next line");

// var axelScore = 88;
// var passing;

// if (axelScore > 80) {
//     passing = "passed";
// } 


// var num = prompt("Enter in a number!");

// if (num == 1) {
//     console.log("January");
// } else if (num == 2) {
//     console.log("February");
// } else if (num == 3) {
//     console.log("March");
// } else if (num == 4) {
//     console.log("April");
// } else if (num == 5) {
//     console.log("May");
// } else if (num == 6) {
//     console.log("June");
// } else if (num == 7) {
//     console.log("July");
// } else if (num == 8) {
//     console.log("August");
// } else if (num == 9) {
//     console.log("September");
// } else if (num == 10) {
//     console.log("October");
// } else if (num == 11) {
//     console.log("November");
// } else if (num == 12) {
//     console.log("December");
// } else {
//     console.log("Please put in a number between 1-12!");
// }

// var actualPass = "Password";
// var actualUN = "John";

// var inputUN = prompt("Input your username");
// var inputPass = prompt("input your password");

// This condition checks to make sure that entered user name 
// and password match the db
// if (inputUN === actualUN && inputPass === actualPass) {
//     alert("welcome back user");
// } else {
//     alert("Username or Password Not valid");
// }

var randNum = Math.round(Math.random() * 10);

var computerNumber = Math.round(Math.random() * 10);

var userNumber = prompt("Enter a number betweeen 1 and 10");

// Create a game where you guess the number against the computer and the person closest wins.