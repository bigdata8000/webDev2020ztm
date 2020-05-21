// create local varable / short hand for below code !!!
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


// first factor
function inputLength() {
    return input.value.length;
}


// second factor
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}



// 2x functions made up from above 2x small functions.

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}


function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}


// finished product

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
