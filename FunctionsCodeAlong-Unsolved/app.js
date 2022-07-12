// // Keyword Name      Paremeters
// function addFunc (num1, num2, num3) {
//     // Executable code will go
//     console.log(num1 + num2 + num3);
// } 

// addFunc(1,2,3);

// function returnAddFunc (num1, num2, num3) {
//     return num1 + num2 + num3;
// } 

// var sumResponse = returnAddFunc(4,5,6);
// var sumResponse2 = returnAddFunc(7,8,9);

// console.log(sumResponse2);


// This is an example of a callback function
// Creating a function that checks if the input is a type of string
function isString (x) {
    // condition to check if our variable is a string
    if (typeof(x) === "string") {
        return true;
    } else {
        return false;
    }
}

function checker (callback, userName) {
    if (callback(username)) {
        alert("welcome back" + userName);
    } else {
        alert("Your name can't have numbers.");
    }
}