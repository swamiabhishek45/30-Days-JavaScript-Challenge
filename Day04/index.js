// Activity 1 : For Loop
// Task 1

for (let i = 1; i <= 10; i++) {
    // console.log(i);
}

// Task 2
for (let i = 1; i <= 10; i++) {
    // console.log(i * 5);
}

// Activity 2: While Loop
// Task 3

let sum = 0;
let i = 0;
while (i <= 10) {
    sum += i;
    i++;
}

// console.log("Sum : ", sum);

// Task 4
let j = 10;

while (j <= 10 && j >= 1) {
    // console.log(j);
    j--;
}

// Activity 3 : Do...While Loop

// Task 5
let k = 1;

do {
    // console.log(k);
    k++;
} while (k <= 5);

// Task 6
let n = 5;

let fact = 1;
let f = 1;
do {
    fact = fact * f;
    f++;
} while (f <= n);

// console.log(fact);


// Activity 4 : Nested loops
// Task 7
for (let i = 0; i < 4; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
        line += " * ";
    }
    console.log(line);
}

// Activity 5 : Loop control statements
// Task 8
for(let i = 0; i<=10; i++){
    if(i === 5) continue;
    console.log(i);
}

// Task 9
for(let i = 0; i<=10; i++){
    if(i === 7) break;
    console.log(i);
    
}