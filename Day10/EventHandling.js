// Activity 1 : Basic Event Handling
// Task 1
const p = document.querySelector("p");
const changeText = document.querySelector("#changeText");

changeText.addEventListener("click", function () {
    p.textContent = "Text Changed";
});

// Task 2
const img = document.querySelector('img');
const changeSize = document.querySelector("#changeSize");

changeSize.addEventListener('dblclick', function(){
    img.style.width = "500px"
})

// Activity 2 : Mouse Events
// Task 3
const bgChange = document.querySelector('#bgChange');
bgChange.addEventListener('mouseover', function(){
    bgChange.style.backgroundColor = "cyan";
});

// Task 4
bgChange.addEventListener('mouseout', function(){
    bgChange.style.backgroundColor = "aquamarine";
});

// Activity 3 : Keyboard Events
// Task 5
const inputkey = document.querySelector("#inputkey");
inputkey.addEventListener('keydown', function(){
    console.log("key pressed to the console");
})

// Task 6
const keyup = document.querySelector("#keyup");
const display = document.querySelector('#display');

keyup.addEventListener("keyup", function(){
    display.textContent = keyup.value;
})


// Activity 4 : form events
// Task 7
