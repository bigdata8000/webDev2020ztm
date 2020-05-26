// video 1 - scope.


var c = "Pizza";

function greeting() {
    var a = "hello";
    var b = "JavaScript";
}


// 'var a' is only accessibly within the function greeting()
// 'var c' is a global variable.

// try it:

console.log(c);
console.log(a);


// example, fun is different to each function ...


// root scope
var fun = 5;

function funFunction() {
    // child scope
    var fun = "hellooooo";
    console.log(1, fun);
}

function funerFunction() {
    // child scope
    var fun = "Byeee";
    console.log(2, fun);
}

function funestFunction() {
    // child scope
    var fun = "AHHHHHHH";
    console.log(3, fun);
}


console.log("window", fun);
funFunction();
funerFunction();
funestFunction();


//
