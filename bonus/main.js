// Ask for name
var name = prompt("What is your name?");

// Ask for surname
var surname = prompt("What is your surname");

// Ask for age
var age = prompt("How old are you?");

// Ask for city
var city = prompt("Write the name of your hometown");

// Ask for favourite color
var color = prompt("What is your favourite color?")

// Say hello
document.getElementById('greeting').innerHTML = "Hello " + name + "!";

// info
document.getElementById('name').innerHTML = name + " " + surname;
document.getElementById('age').innerHTML = age;
document.getElementById('city').innerHTML = city;
document.getElementById('color').innerHTML = color;

// Write password made of 3 info
document.getElementById('password').innerHTML = name + surname + color + "21";
