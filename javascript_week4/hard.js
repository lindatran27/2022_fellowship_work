// HARD: Given the information below for Tom and Jerry. 
//   Tom - 	height:  9in   	mass: 8 g
//   Jerry - 	height: 10in 	mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
//   BMI = mass / height ^2 = mass / (height * height)
// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. 
// Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. 
// Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

var tom = [9, 8]

var tomHeight = tom[0]
var tomMass = tom[1]

//var tomBMI = (((tomMass / tomHeight) ** 2) = (tomMass)/ (tomHeight * tomHeight))

function findBMI (n1, n2) {
    
}

var jerry = [10, 45]

var jerryHeight = jerry[0]
var jerryMass = jerry[1]

//var jerryBMI = (((jerryMass / jerryHeight) ** 2) = (jerryMass) / (jerryHeight * jerryHeight))

var isTrue = true;

if (jerryBMI > tomBMI) {
    isTrue = false;
    console.log(`Is Tom's BMI higher than Jerry's? ${isTrue}`)
} else {
    console.log(`Is Tom's BMI higher than Jerry's? ${isTrue}`)
}



