/* Question 1
Declare and initialise a variable with a string value.
*/
var myVariable = "string";

/* Question 2
Create an object variable called person and give it two properties (a key and a value) of your choice.
*/
var person = {
    name: "Ole Simen",
    hometown: "Stadlandet"
};

/* Question 3
Create a variable called outOfStock and assign it a boolean value.

Create an if else statement that checks the value of outOfStock.

If it is true, console log "Out of stock". Otherwise log "In stock".
*/
var outOfStock = false;

if (outOfStock === true) {
    console.log("Out of stock");
} else {
    console.log("In stock");
}

/* Question 4
Create an array of five numbers.

Loop through the array and console log each value.
*/
var timesFiveArray = [5, 10, 15, 20, 25];

for (var i = 0; i < timesFiveArray.length; i++) {
    console.log(timesFiveArray[i]);
}

/* Question 5
Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop.
*/

for (var count = 15; count <= 25; count++) {
    console.log(count);
}

/* Question 6
Using the same loop from the above question, only log the value of the counter variable if it is equal to 20.
*/
for (var count = 15; count <= 25; count++) {
    if (count === 20) {
        console.log(count);
    }
}

/* Question 7
Create an array of two objects. Each object must have the same three properties (with different values):

one property with a string value
one property with a number value
one property with a boolean value
Loop through the array and console log the number value and the boolean value.
*/
var coffees = [
    {
        name: "Karogoto",
        price: 175,
        inStore: true
    },

    {
        name: "Bifdu",
        price: 179,
        inStore: false
    }
];

for (var i = 0; i < coffees.length; i++) {
    console.log(coffees[i].price);
    console.log(coffees[i].inStore);
}

/*Question 8
Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.

Inside the function, log the string "I don't like " together with the argument.

Call the function and pass in a value of your choice.

Example:
If you pass in the value "giraffes", the function should log: "I don't like giraffes".
*/

function whatIDontLike(dislikes) {
    console.log("I don't like " + dislikes);
}

whatIDontLike("grammars. Especially proper punctuatin.");

/*Question 9
Create a function that accepts two arguments.

Inside the function, subtract the second argument from the first and console log the result.
*/

function InStoreStock(number1, number2) {
    var sum = number1 - number2;
    console.log(sum);
}

/*Question 10
Create an empty array.

Create a function that accepts one argument.

Inside the function, add the argument to the array.

Call the function and pass in a value of any type.
*/
var coffeMenu = [];

function addCoffee(nameOfCoffe) {
    coffeMenu.push(nameOfCoffe);
}

addCoffee("Hunkute");
