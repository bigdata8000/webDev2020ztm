// video 13 - pass by value vs pass by reference.

 let obj1 = {name: 'Yao', password: '123'};
 let obj2 = obj1;

 obj2.password = 'easypeasy'

 console.log(obj1);
 console.log(obj2);


//---------------------------


var a = 5;
var b = a;

b++;

var c = [1,2,3,4,5];
var d = c;
d.push(18762761);
console.log(d);


//---------------------------




// video 14 - type coercion

1 == '1'    // true, the value is the same.

1 === '1'   // false, the type is not the same.



// https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3

// https://dorey.github.io/JavaScript-Equality-Table/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness




//---------------------------

// video 16 - ES7.

'helloooo'.includes('o');   // true

const pets = ['cat', 'dog', 'bird'];
pets.includes('dog');       // true

pets.includes('lion');      // false



const mySquare = (x) => x**2
mySquare(8);



const myCube = (y) => y**3
myCube(5);




//---------------------------

// video 18 - ES8.


'Tutrle'.padStart(10);
'Turtle'.padEnd(10);


const fun = (
            a,
            b,
            c,
            d,
            ) => {
    console.log(a);
}

fun(5,6,7,8,);


/*
    object.keys
    objects.values
    objects.entries
*/

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr.Grinch'
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})


Object.values(obj).forEach(values => {
    console.log(values);
})


Object.entries(obj).forEach(values => {
    console.log(values);
})



//---------------------------