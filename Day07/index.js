"use strict";

// Activity 1 : Object Creation and Access
// Task 1
const book = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2003,
    getTitleAndAuthor: function () {
        return `${this.title}, ${this.author}`;
    },
    updateYear: function (year) {
        return (this.year = year);
    },
    getTitleAndYear: function () {
        return `${this.title}, ${this.year}`;
    },
};

console.log(book);

// Task 2
console.log("Title: ", book.title);
console.log("Author: ", book.author);

// Activity 2 : Objects Methods
// Task 3
console.log(book.getTitleAndAuthor());

// Task 4
console.log(book.year);
console.log(book.updateYear(2005));
console.log(book.year);

// Activity 3 : Nested Objects
// Task 5

const library = {
    name: "Vyankat Library",
    books: [
        { title: "The Magic of Thinking Big", author: "David J. Schwartz" },
        {
            title: "The Power of your subconscious mind",
            author: "Joseph Murphy",
        },
        {
            title: "How to Win Friends and Influence People",
            author: "Dale Carnegie",
        },
    ],
};

// console.log(library);

// Task 6
console.log(library.name);
console.log(library.books[0].title);
console.log(library.books[1].title);
console.log(library.books[2].title);

// Activity 4 : The this keyword
// Task 7
console.log(book.getTitleAndYear());

// Activity 5 : Object Iteration
// Task 8

for (let key in book) {
    console.log(key, ":", book[key]);
}

// Task 9
console.log(Object.keys(book)); // returns an array of keys.

console.log(Object.values(book)); // returns an array of values.

console.log(Object.entries(book)); // returns an array of [key, value] pairs.
