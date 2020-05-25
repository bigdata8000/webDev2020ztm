// video 11 - reference type

var object1 = { value: 10};
var object2 = object1;
var object3 = { value: 10};

object1 === object2         // true

object1 === object3          // false





// context

function b() {
    let a = 4; 
} 






// instantiation, multiple copies of an object.

class Player {
    constructor(name, type) {
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
    }

    play() {
        console.log(`WEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shell', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

wizard1.play();
wizard1.introduce();

wizard2.play();
wizard2.introduce();
