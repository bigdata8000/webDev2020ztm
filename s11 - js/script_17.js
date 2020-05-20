// video 17 - facebook.

var database = [
    {
        username: "h",
        password: "p"
    }
];


var newsFeed = [
    {
        username: "bobby",
        timeline: "So tired from all that learning"
    },
    {
        username: "sally",
        timeline: "Javascript is soooo cool!"
    }
];



//


var userNamePrompt = prompt("what's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
    if (user === database[0].username && 
        pass === database[0].password) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username or password!");
    }
}


signIn(userNamePrompt, passwordPrompt);
