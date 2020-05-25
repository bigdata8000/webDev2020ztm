// video 21 - ES10 (ES2019)

const myArray = [5,6,7,8,9] 
const myArray2 = [5,[6,7],[8,9]]
const myArray3 = [5,[6,7],[8,9,[10]]]

myArray2.flat()

myArray3.flat()
myArray3.flat(2)


//


const entries = ['bob', 'sally',,,,,,,'cindy']
entries.flat()


//


const userEmail = '     eddytheeagle@gmail.com'
const userEmail2 = 'john@gmail.com      '
console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());


//


userProfiles = [['commanderTom', 23], 
                ['derekZlander', 40], 
                ['hansel', 18]]


Object.fromEntries(userProfiles);


//


try {
    4 + 5
} catch {
    console.log('Error code goes here.')
}




try {
    bob + 'hi' 
} catch {
    console.log('Error code goes here.')
}


