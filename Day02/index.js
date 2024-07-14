// Activityy 1: Arithemetic Operations

const num1 = 778;
const num2 = 722;

const add = num1 + num2;
console.log(add);

const subtract = num1 - num2;
console.log(subtract);

const multiply = num1 * num2;
console.log(multiply);

const divide = num1 / num2;
console.log(divide);

const remainder = num1 % num2;
console.log(remainder);

// Activity 2 : Assignment Operators
// Task 6
let myNum = 5;
myNum += 10;
console.log(myNum);

// Task 7
let myNum2 = 10;
myNum2 -= 5;
console.log(myNum2);

// Activity 3 : Comparison Operators
let num3 = 10;
let num4 = "10";
console.log(num3 > num4);
console.log(num3 < num4);

console.log(num3 >= num4);
console.log(num3 <= num4);

console.log(num3 == num4); // True - check only value
console.log(num3 === num4); // false - check value and datatype

// Activity 4 : Logical Operators
// Task 11
let age = 21;
let hasDrivingLicense = true;

if (age >= 18 && hasDrivingLicense) {
    console.log("You can drive a car");
} else {
    console.log("You cannot drive a car");
}

// Task 12
let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
    console.log("You can go to the beach");
} else {
    console.log("You cannot go to the beach");
}

// Task 13
let isSunny = true;
let isRainy = false;

let stayInside = !(isSunny && isRainy);

console.log(stayInside);

// Activity 5 : Ternary Operator
function checkNumber(num) {
    let result = num > 0 ? "Positive" : "Negative";
    console.log(result);
}

checkNumber(12);
checkNumber(-5);
