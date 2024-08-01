// Activity 1 : Understanding Promises
// Task 1 --- then

const tea = new Promise((res) => {
    setTimeout(() => {
        res("Tea is ready");
    }, 2000);
});

tea.then((result) => {
    console.log(result);
});

// Task 2 --- error
const work = new Promise((res, rej) => {
    setTimeout(() => {
        rej("Work is not done");
    }, 2000);
});

work.then().catch((err) => {
    console.log(err);
});

// Activity 2 : Chaining Promises
// Task 3
const fetchData = (message, delay) => {
    // arguments
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve(message);
        }, delay);
    });
};

fetchData("Fetching data 1", 1000) // parameters
    .then(() => fetchData("Fetching data 2", 2000))
    .then(() => fetchData("Fetching data 3", 1500))
    .then(() => fetchData("Fetching data 4", 1000))
    .then(() => fetchData("Fetching data 5", 2000))
    .then(() => {
        console.log("All data fetched in order!");
    })
    .catch((error) => {
        console.error("Error in fetching data: ", error);
    });

// Activity 3: Using Async/Await
// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

const myFunc = async () => {
    const result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise resolved!!");
        }, 2000);
    });
    console.log(result);
};

myFunc();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error messages.

const asyncFun = async (url) => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error occured", error.message);
        console.error(error);
    }
};

asyncFun("https://jsnplaceholder.typicode.com/posts/1").then((data) => {
    if (data) {
        console.log("Data fetched successfully: ", data);
    }
});

// Activity 4: Fetching Data from an API
// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error("Error fetching data: ", err);
    });

// Task 7
const getData = async () => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error in fetching data", error);
    }
};

getData();

// Activity 5 : Concurrent promises
// Task 8

const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise 1 resolved!!");
    }, 1000);
});
const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise 2 resolved!!");
    }, 2000);
});
const promise3 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise 3 resolved!!");
    }, 3000);
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values[0]);
    console.log(values[1]);
    console.log(values[2]);
});

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
const promiseA = new Promise((resolve) =>
    setTimeout(() => resolve("Promise A resolved"), 1000)
);
const promiseB = new Promise((resolve) =>
    setTimeout(() => resolve("Promise B resolved"), 2000)
);
const promiseC = new Promise((resolve) =>
    setTimeout(() => resolve("Promise C resolved"), 3000)
);

Promise.race([promiseA, promiseB, promiseC]).then((value) => {
    console.log(value);
});
