// Activity 03  : If-Else statements
// Task 1
let num = 123;

if (num == 0) {
    console.log("zero");
}
if (num > 0) {
    console.log("positive");
}
if (num < 0) {
    console.log("negative");
}

// Task2

let age = 21;

if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}

// Activity 2: Nested If-Else statements
// Task 3
let a = 10;
let b = 30;
let c = 120;

if (a > b && a > c) {
    console.log(`a = ${a} is largest number`);
} else if (b > a && b > c) {
    console.log(`b = ${b} is largest number`);
} else if (c > a && c > b) {
    console.log(`c = ${c} is largest number`);
}

// Activity 3 : Switch Case
// Task 4
let day = 1;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;

    default:
        break;
}

// Task 5
let score = 612;

switch (true) {
    case score >= 90 && score <= 100:
        grade = "A";
        break;
    case score >= 80 && score < 90:
        grade = "B";
        break;
    case score >= 70 && score < 80:
        grade = "C";
        break;
    case score >= 60 && score < 70:
        grade = "D";
        break;
    case score >= 50 && score < 60:
        grade = "E";
        break;
    case score >= 0 && score < 50:
        grade = "F";
        break;
    default:
        console.log("Invalid score.");
        break;
}

// Activity 4 : Conditional (Ternary Operator)
// Task 6
let no = 12;
let result = no % 2 == 0 ? "Even" : "Odd";
console.log(result);

// Activity 5 : Combining Conditions
// Task 7
let year = 2028;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}
