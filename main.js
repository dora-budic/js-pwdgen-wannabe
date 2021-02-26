// Ask for name
var name = prompt("Write your name");

// Ask for surname
var surname = prompt("Write your surname");

// Ask for favourite color
var color = prompt("What is your favourite color?")

// Write password made of these 3 info
document.getElementById('password').innerHTML = "Your password is: " + name + surname + color + "21";
