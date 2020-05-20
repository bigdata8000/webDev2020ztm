// video 13 - data structure.


// arrays.


var myPets = ["rabbit", "dog", "fish", "bird", "lion"];

console.log(myPets[0]);         // rabbit
console.log(myPets.length);     // 5

console.log(myPets[(myPets.length-1)]);       // last item on array


myPets.shift();         // removed FIRST item. ie shhift everything to the left by 1.
myPets;                 // dog, fish, bird, lion.

myPets.pop();           // removed LAST item.
myPets;                 // dog, fish, bird.

myPets.push("fox");     // ADDs to end of array.
myPets;                 // dog, fish, bird, fox.

myPets.sort();

//



// exercise 14.

var fruits = ["Banana", "Apple", "Orange", "Blueberries"];

// 1 - remove banana from array:
fruits.shift();

// 2 - sort array in order:
fruits.sort();

// 3 - add "kiwi" at the end of array:
fruits.push("Kiwi"); 

// 4 - remove "Apple" from array:
fruits.shift();

// 5 - sort array in reverse order:
fruits.reverse();

//