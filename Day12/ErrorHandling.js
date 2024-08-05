// Activity 1 : Basic Error Handling with Try-Catch
// Task 1 : Write a function that intentionally throws an error and use a try catch block to handlle the error.

const throwError = () => {
    try {
        throw new Error("Caught an error");
    } catch (error) {
        console.error(error);
    }
};

// throwError();

// Task 2
const divideNum = (nume, deno) => {
    try {
        if (deno == 0) {
            throw new Error("Division by zero is not allowed");
        }

        const ans = nume / deno;
        console.log(ans);
    } catch (error) {
        console.error(error);
    }
};

divideNum(23, 7);

// Activity 2 : Finally block
// Task 3
const final = () => {
    try {
        console.log("try block executed!");
    } catch (error) {
        console.error(error, "catch block executed");
    } finally {
        console.log("finally block executed");
    }
};

// final();

// Activity 3 : Custom Error Objects
// Task 4

class customError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function throwCustomError(){
    throw new customError("This is custom error")
}


function handleCustomError(){
    try {
        throwCustomError();
    } catch (error) {
        if(error instanceof customError){
            console.error("Caught a custom error", error.message);
        } else{
            
            console.error("Caught a custom error", error);
        }
    }
}

// handleCustomError();