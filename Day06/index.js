// Activity 1 : Array Creation and Access
// Task 1
let arr = [1, 2, 3, 4, 5];
console.log(arr);

// Task 2
let firstElem = arr[0];
console.log("First Elem :", firstElem);

let lastElem = arr[arr.length - 1];
console.log("Last Elem :", lastElem);

// Activity 2 : Array Methods ( Basic)
// Task 3
arr.push(6);
console.log(arr);

// Task 4
arr.pop();
console.log(arr);

// Task 5
arr.shift();
console.log(arr);

// Task 6
arr.unshift(1);
console.log(arr);

// Activity 3 : Array Method (Intermediate)
// Task 7

let dblArr = arr.map((n) => {
    return 2 * n;
});

console.log(arr);
console.log(dblArr);

// Task 8
let evenNum = arr.filter(num => {
    if(num % 2 == 0) return num;
});

console.log(evenNum);

// Task 9 
