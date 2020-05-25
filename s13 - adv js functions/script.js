// video 7 - adv functions

const first = () => {
    const greet = "hi";
    const second = () => {
        alert(greet);    
    }
    return second;
}


const newFunc = first();
newFunc();



const first = () => {
    console.log("Hello");
}



//----------------------------------


function buyMilk(qty) {
    var total = qty * 1.5;
    console.log(qty + " bottles of milk will cost " + total);
}

buyMilk(3);


//----------------------------------
// this family needs 2 loafs of bread a day,
// each loaf of bread costs £ 1.10
// the price is subject to change, 
// create a function to calculate the cost for bread for 7 days.



const breadPerDay = (qty) => {
    let breadPrice = 1.1
    let totalWeek = (qty * breadPrice) * 7;
    console.log(qty + " loafs of bread per day, your weekly cost will be £ " + totalWeek);
}

breadPerDay(qty);



//----------------------------------


const myMultiply = (a, b, c) => {
    let result = (a * b) + c
    console.log(result)
}


myMultiply(3, 4, 1);
