// Activity 1 : Selecting and Manipulating Elements
// Task 1
const h1 = document.getElementById("h1");
h1.textContent = "Namaste Duniya!🙏";

// Task 2
const h5 = document.querySelector(".h5");
h5.style.backgroundColor = "#888";

// Activity 2 : Creating and Appending Elements
// Task 3
const newElem = document.createElement("div");
newElem.textContent = "New Created <div/>";
const container = document.querySelector(".container");
document.body.appendChild(newElem);

// Task 4
const newLi = document.createElement("li");
newLi.textContent = "Contact Us";
const ul = document.querySelector("ul");
ul.appendChild(newLi);

// Activity 3 : Removing Elements
// Task 5
document.body.removeChild(newElem);

// Task 6
// ul.removeChild(newLi);
document.body.removeChild(document.body.lastChild);

// Ativity 4 : Modifying Attributes and Classes
// Task 7
const img = document.querySelector("img");
img.src = "pic_bulbon.gif";

// Task 8
ul.classList = "bg-Color";
ul.classList.remove("bg-Color");

// Activity 5 : Event Handling
// Task 9
const changeText = document.querySelector("#changeText");
changeText.onclick = function () {
    h5.textContent = "Text changed!";
};

// Task 10
changeText.addEventListener("mouseover", function () {
    changeText.style.borderColor = "green";
    console.log("jojoj");
});
