// VERY EASY: Write a function named min that takes two arguments and returns their minimum.
function minNum (n1, n2) {
    if (n1 > n2) {
        return n2;
    } else {
        return n1;
    }
}

console.log(minNum(-9, -10))
console.log(minNum(1, 2))
console.log(minNum(5, 3))