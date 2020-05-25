// Advance Arrays

const array = [1, 2, 10, 16];

const double = []
const newArray = array.forEach((num) => {
    double.push(num * 2);
})

console.log('forEach', double);



// map, filter, reduce.  //  map.

const mapArray = array.map((num) => {
    return num * 3
});

console.log('map', mapArray);



// filter
const filterArray = array.filter(num => {
    return num > 5
})

console.log('filter', filterArray);



// reduce 
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0);

console.log('reduce', reduceArray);



// array exercise
// https://sdras.github.io/array-explorer/


