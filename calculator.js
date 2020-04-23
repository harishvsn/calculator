let currString = "";
let result = "0";

let elementResult = document.querySelector('#element-result');
let elementC = document.querySelector('#element-C');
let elementBackSpace = document.querySelector('#element-backspace');
let elementEquals = document.querySelector('#element-equals');
let numbers = document.querySelectorAll('.num');
let operations = document.querySelectorAll('.op');


elementC.addEventListener('click', function (event) {
    // console.log('element C clicked');
    currString = "";
    result = "0";
    elementResult.innerHTML = result;
});

for (const number of numbers) {
    // console.log('element num executed');
    number.addEventListener('click', function (event) {
        currString += event.target.innerHTML;
        if (currString[0] === "0" && currString.length > 1) {
            currString = currString.slice(1, currString.length);
        }
        elementResult.innerHTML = currString;
        // console.log('element num clicked' + event.target.innerHTML);

    })
}


for (const operation of operations) {
    // console.log('element op executed');
    operation.addEventListener('click', function (event) {
        currString += event.target.innerHTML;
        elementResult.innerHTML = currString;
        // console.log('element op clicked' + event.target.innerHTML);
    })
}

elementBackSpace.addEventListener('click', function (event) {
    // console.log('element Back clicked');

    currString = currString.slice(0, currString.length - 1);
    if (currString === "") {
        currString = "0";
    }
    elementResult.innerHTML = currString;
});

elementEquals.addEventListener('click', function (event) {
    // console.log('element = clicked');
    currString = currString.replace("÷", "/");
    result = eval(currString);
    elementResult.innerHTML = "" + result;
    currString = result;
});

// split into more functions like reRender() etc...




