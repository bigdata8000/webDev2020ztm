alert("working");


// video 5 - variables. 

var first = prompt("enter first number");
var second = prompt("enter second number");

var total = first + second;
console.log("you entered a total of: " + total);  // string concat.

/**/

var first_v2 = prompt("enter a number");
var second_v2 = prompt("enter a second number");

var sum = Number(first_v2) + Number(second_v2);
alert("The total entered is: " + sum);          // actual plus of 2 numbers.



// video 8 - control flow  //  if statements.

var agentName = "mike";
var yourName = prompt("enter your name");

if (yourName === agentName) {
    console.log("welcome back agent 008.");
} else {
    console.log("Hello " + yourName);
};


/*
    &&  and
    ||  or
    !   not
*/


var yourCode = prompt("enter your 3 digit number code");

if (yourCode === "007" || yourCode === "008") {
    console.log("welcome back agent " + yourCode + ".");
} else if (yourCode === "009") {
    console.log("Hello dark agent " + yourCode + ".");
} else {
    console.log("Access denied.")
};


/**/


// exercise 9 - can you drive ?

var age = prompt("Enter your age");

if (Number(age) <=17) {
    console.log("Sorry, you are too young to drive.");
} else if (Number(age) > 18) {
    console.log("Powering on, enjoy the ride!");
} else if (Number(age) === 18) {
    console.log("Congratulations on your first year of driving.");
};



/**/
