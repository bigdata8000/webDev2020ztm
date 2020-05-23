// video 5 - ES5 & ES6.


/*
    https://babeljs.io/

    converts js to all browsers
*/


/*
    OLD STANDARD
    var a = ?
    

    NEW STANDARD
    let = ?     .variable can be changed.
    const = ?   .variable CAN'T be changed.
*/


const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
}




console.log()

experience = 80;

player = 'sally';       // will cause error.




// Destructuring

const obj = {
    player: 'bobbyAxe',
    experience: 100,
    wizardLevel: false
}



// Template strings, with back ticks !

const name = "Sally";
const age = 34;
const pet = "Horse";

const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have.`



// Default arguments

function greet(name = '', age=30, pet='cat') {
    return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have.`
}

greet();
greet('John', 50, "monkey");



// Arrow functions

function add(a, b) {
    return a + b;
}


const add_v2 = (a, b) => a + b;

