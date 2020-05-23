// video 3 - advance contorl flow, switch.


function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward": 
            whatHappens = "you encounter a monster";
            break;
        case "back": 
            whatHappens = "you arrived home";
            break;
        case "right": 
            whatHappens = "you found a river";
            break;
        case "left": 
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";            
    }
    return whatHappens;
}


// paste the below inside console:

window.moveCommand("forward");
window.moveCommand("back");
window.moveCommand("right");
window.moveCommand("left");
window.moveCommand("sdfredfgbhr");

//
