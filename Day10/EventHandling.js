// Activity 1 : Basic Event Handling
// Task 1
const p = document.querySelector("p");
const changeText = document.querySelector("#changeText");

changeText.addEventListener("click", function () {
    p.textContent = "Text Changed";
});

// Task 2
const img = document.querySelector("img");
const changeSize = document.querySelector("#changeSize");

changeSize.addEventListener("dblclick", function () {
    img.style.width = "500px";
});

// Activity 2 : Mouse Events
// Task 3
const bgChange = document.querySelector("#bgChange");
bgChange.addEventListener("mouseover", function () {
    bgChange.style.backgroundColor = "cyan";
});

// Task 4
bgChange.addEventListener("mouseout", function () {
    bgChange.style.backgroundColor = "aquamarine";
});

// Activity 3 : Keyboard Events
// Task 5
const inputkey = document.querySelector("#inputkey");
inputkey.addEventListener("keydown", function () {
    console.log("key pressed to the console");
});

// Task 6
const keyup = document.querySelector("#keyup");
const display = document.querySelector("#display");

keyup.addEventListener("keyup", function () {
    display.textContent = keyup.value;
});

// Activity 4 : form events
// Task 7
const myForm = document.querySelector("#myForm");

myForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {};

    formData.forEach((val, key) => {
        data[key] = val;
    });

    console.log(data);
});

// Task 8
const mySelect = document.querySelector("#mySelect");
mySelect.addEventListener("change", function (e) {
    const seletedValue = e.target.value;

    document.querySelector(
        "#displayText"
    ).textContent = `Selected value: ${seletedValue}`;
});

// Activity 5 : Event Delegation
// Task 9
document.querySelector("#myList").addEventListener("click", function (e) {
    if (e.target && e.target.tagName === "LI") {
        console.log(e.target.textContent);
    }
});

// Task 10
const parentElem = document.querySelector("#parentElement");
const addNewElemBtn = document.querySelector("#addNewElemBtn");

const addNewElement = () => {
    const newElement = document.createElement("div");
    newElement.className = "childElem";
    newElement.textContent = "New Element Added!!";
    parentElem.appendChild(newElement);
};

addNewElemBtn.addEventListener("click", addNewElement);

parentElem.addEventListener("click", function (e) {
    if (e.target && e.target.className === "childElem") {
        console.log(e.target.textContent);
    }
});
