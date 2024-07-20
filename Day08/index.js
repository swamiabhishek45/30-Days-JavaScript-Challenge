// Activity 1 : Template Literals
//  Task 1
let name = "Carl";
let age = 22;

let str = `${name} is ${age} yeas old`;

// console.log(str);

// Task 2
let mulStr = `
${name} is one of the richest person in the world 
in his early age which is ${age} 
and he don't rely on anybody. He is independent;
`;

// console.log(mulStr);

// Activity 2 : Destructuring
// Task 3
const numbers = [1, 2, 3, 4, 5];

const [num1, num2] = numbers;

console.log(num1);
console.log(num2);

// Task 4
const book = {
    title: "Bhagvatgita",
    author: "Veda-Vyasa",
};

const { title, author } = book;

console.log(title);
console.log(author);

// Activity 3: Spread and Rest operator

// Task 5
const num = [1, 2, 3, 4, 5];

const newArr = [...num, 6, 7, 8, 9, 10];

console.log(newArr);

// Task 6
function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
        total += arg;
    }
    return total;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5));

// Activity 4 : Default Parameters
// Task 7
const product = (n, m = 1) => {
    return n * m;
};

console.log(product(2, 5));
console.log(product(2));

// Activity 5 : Enhanced Object Literals
// Task 8
// Task 9
const Name = "Ram";
const MobileNo = 8936470378;
const status = "Single";
const property = {
    haveCar: true,
    haveHome: true,
    haveJob: true,
};
const work = () => {
    return "Software Engineer";
};

const Person = { Name, MobileNo, status, property, work };

console.log(Person);
console.log(Person.status);
console.log(Person.MobileNo);
console.log(Person.property);
