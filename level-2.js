/* 
Question 1
Using the loop from question 5 above, only log the counter variable if it is an even number.

Hint: you can use the modulus % operator for this.
*/
for (var count = 15; count <= 25; count++) {
    if (count % 2 === 0) {
        console.log(count + " yep, even.");
    }
}

/*
Question 2
Create a function that logs the sentence "I am a function".

Assign this function to a variable called innerFunction.

Create another function called outerFunction that accepts one argument.

Inside outerFunction, call the argument like you would a function - with parenthesis ().

Call outerFunction and pass in the innerFunction variable.
*/

function cptObviousLogger() {
    console.log("I am a function");
}

var innerFunction = cptObviousLogger;

function outerFunction(wrapper) {
    wrapper();
}

outerFunction(innerFunction);
