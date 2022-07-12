// EASY: Create an array of students holding their last name, first name, and age with 3 students. 
// To validate, please log a greeting with the first name, last name and age of the 2nd student. 
// The output should look like "Hello, my name is John Doe and I'm 19 years old."

var student1 = ['Linda', 'Tran', 19];
var student2 = ['Kelly', 'Belly', 18];
var student3 = ['Linnie', 'D', 20];

var students = [student1, student2, student3]

console.log(`Hello, my name is ${students[1][0]} ${students[1][1]} and I'm ${students[1][2]} years old.`)