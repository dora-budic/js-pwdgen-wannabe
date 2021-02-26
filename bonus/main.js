// Ask for name
var name = prompt("Write your name");

// Ask for surname
var surname = prompt("Write your surname");

// Ask for favourite color
var color = prompt("What is your favourite color?")

// Say hello
document.getElementById('greeting').innerHTML = "Hello " + name + "!";

// Write password made of these 3 info
document.getElementById('password').innerHTML = name + surname + color + "21";
