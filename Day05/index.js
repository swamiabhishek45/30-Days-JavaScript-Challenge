// Activity 1 : Function Declaration

// Task 1

evenORodd(2);

function evenORodd(n) {
    if (n % 2 == 0) {
        console.log(n, "is Even");
    } else {
        console.log(n, "is Odd");
    }
}

// Task 2

function square(n) {
    console.log(`Square of ${n} :`, n * n);
}

square(5);

// Activity 2 : Function Expression
// Task 3

var maxNum = function (num1, num2) {
    console.log(`Max Num (${num1}, ${num2}) :`, num1 > num2 ? num1 : num2);
};

maxNum(4, 6);

// Task 4

let concatStr = function (str1, str2) {
    console.log(str1 + " " + str2);
};

concatStr("Abhishek", "Swami");

// Activity 3 : Arrow Function

// Task 5

const sum = (num1, num2) => {
    console.log(`${num1} + ${num2} =`, num1 + num2);
};

sum(3, 6);

// Task 6

let findChar = (str, s) => {
    if (str.includes(s)) {
        return true;
    }
    return false;
};

console.log(findChar("Superman", "m"));

// Activity 4 : Function parameters and Default parameters

// Task 7
const product = (num1, num2 = 1) => {
    console.log(`${num1} * ${num2} =`, num1 * num2);
};
product(3);

// Task 8
let greet = (name, age = 20) => {
    console.log(`Hi, ${age} years old ${name}`);
};

greet("Sushant");

// Activity 5 : Higher Order Function

// Task 9

const repeatFunc = (fn, num) => {
    for (let i = 0; i < num; i++) {
        fn();
    }
};

function sayHello() {
    console.log("Hello!");
}

function sayGoodBye() {
    console.log("Good Bye👋");
}

repeatFunc(sayHello, 5);
repeatFunc(sayGoodBye, 2);

// HOF(myFunc1, num1);

// Task 10

const applyFunc = (func1, func2, val) => {
    const res1 = func1(val);
    const res2 = func2(res1);
    return res2;
};

function double(x) {
    return 2 * x;
}

function squr(x) {
    return x * x;
}

let value = 5;
const finalResult = applyFunc(double, squr, value);
console.log(finalResult);
