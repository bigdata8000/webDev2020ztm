// video 15 - data structure: objects.

var user = {
    name: "John",
    age: 34,
    hobby: "Scoccer",
    pets: ["cat", "dog", "mouse"],
    isMarried: false,
    sing: function() {
        console.log("oops I did it again...");
    }
};

console.log(user.name + " is aged "); 
console.log(user.name + " is aged " + user.age); 
console.log(user.name + " is aged " + user.age + " and loves " + user.hobby); 
console.log(user.pets[0]);      // cat.
user.sing();


//

// add to object:

user.favFood = "Pizza";
user;

//




// objects inside a list.

var regUsers = [
    {
        username: "amy",
        password: "happy21"
    },
    {
        username: "bob",
        password: "123"
    }
];


// show all objects:
regUsers;

// show "amy" password:
regUsers[0].password;

// 