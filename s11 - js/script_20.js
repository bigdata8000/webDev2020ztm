// video 20 - facebook p2.

var database = [
    {
        username: "h",
        password: "p"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "amy",
        password: "777"
    }
];


var newsFeed = [
    {
        username: "bobby",
        timeline: "So tired from all that learning"
    },
    {
        username: "kelly",
        timeline: "Javascript is soooo cool!"
    }
];



//


function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
            return true;
        } 
    }
    return false;
}


function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong user name and password.");
    }
}


var userNamePrompt = prompt("what's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);
