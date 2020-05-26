// video 23 - advanceed Loops.

const basket = ['apples', 'oranges', 'grapes']
const detailBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}


for (let i=0; i<basket.length; i++) {
    console.log('Need to buy ' + basket[i]);
}


//


basket.forEach(item => {
    console.log(item);
})



// for of
// iterating - arrays, strings

for (item of basket) {
    console.log(item);
}




// for in - properties
// enumerating

for (item in detailBasket) {
    console.log(item)
}




//---------------------------
// video 25 - debugging


const flattened = [[0,1], [2, 3], [4,5]].reduce(
    (a,b) => a.concat(b), []);




//---------------------------
// video 26 - how javascript works ?

/*
    Memory Heap.

    Call Stack.

    Single threaded - one command is processed at a time.

    synchronous - execute one thing at a time.
    asynchronous - parallel programming, units of work runs separately from the main application.  

*/



// recursion, a function that calls itself.

function foo() {
    foo()
}

foo()


// https://github.com/getify/You-Dont-Know-JS

// https://javascript.info/

// http://dmitrysoshnikov.com/ecmascript/javascript-the-core-2nd-edition/

// https://www.freecodecamp.org/news/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2/

