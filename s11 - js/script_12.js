//var age = prompt("What is your age?");

function checkDriverAge(age) {
    if (age > 18) {
        console.log("You can drive.");
    } else if (age < 18) {
        console.log("Sorry, too young.");
    } else if (age === 18) {
        console.log("This is your first year of driving!");
    }
};

checkDriverAge(18);

