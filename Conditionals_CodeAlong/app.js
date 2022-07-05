var num1 = 1;
var num2 = 2;

//Show initally what a conditional looks like and how it ultimately comes down to comparing true or false at the most base level
if (num1 === num2){
    console.log(true);
}else{
    console.log(false);
};

//Add an aditonal variable and show how math can facotr in 
var num3 =3

if (num1 + num2 === num3){
    console.log(true);
}else{
    console.log(false);
}

//display how we can add messages in with our conditionals for testing purposes 
if (num1 + num2 === num3){
    console.log(`${num1} + ${num2} = ${num3} is ` + true);
}else{
    console.log(`${num1} + ${num2} = ${num3} is ` + false);
}

//finally show how you can do it either way to get different results/see it hit the else
if (num1 + num3 === num2){
    console.log(`${num1} + ${num3} = ${num2} is ` + true);
}else{
    console.log(`${num1} + ${num3} = ${num2} is ` + false);
}

