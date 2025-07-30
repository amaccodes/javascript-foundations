// !!!!!!!!!! FUNCTIONSSS

// links: https://javascript.info/arrow-functions-basics, https://javascript.info/function-expressions, and https://javascript.info/function-basics

// basic syntax:

/*

function (parameters) {
[executable code goes here]
}

*/


// examples:

// function declaration 
function favoriteAnimal(animal) {
    console.log('My favorite animal is a ' + animal + '!')
}

// invoking the function
favoriteAnimal('Great White Shark')

// another example
function addition(x, y) {
    return x + y
}

console.log(addition(2, 2))



// arrow functions

let answer = (x, y, z) => (x * y * z) ** z; 

console.log(answer(4, 2, 3))



// function expression 
// declare the function
let sayHi = function () {
    alert('Hello');
};

// inoke the function
sayHi();


// !!!! JavaScript Call Stack 

// The call stack works based on the last-in-first-out (LIFO) principle.
// the last function to enter the call stack is the first one out 

// observe this example here: https://www.javascripttutorial.net/javascript-call-stack/

// initally when a Javascript file is executed the presiding JavaScript engine pushes a global execution 
// context on to the call stack. As each function is executed the engine pushes the corresponding function 
// execution context on top of the parent function execution context and when a given function is done 
// executing it is taken off the call stack. So in the scenarion where there are functions nested inside of 
// another the first function execution context is placed on the call stack and then the second one and then 
// the second one completes and then the first one completes. That is the nature of the last-in-first-out 
// principle of the call stack.


function add(x, y) {
    return x + y;
}

function avg(x, y) {
    return add(x, y) / 2;
}

let x = avg(1, 10)
console.log(x)


// !!!!!!!!!!! Stack Overfolow
/*

The call stack has a fixed size, depending on the implementation of the host environment, either the web browser or Node.js.

If the number of execution contexts exceeds the size of the stack, a stack overflow error will occur.

For example, when you execute a recursive function that has no exit condition, the JavaScript engine will issue a stack overflow error:

*/

// this usually happens when you are infinitely calling a function like this:

function fn() {
    fn();
}

// fn(); // stack overflow error


// !!!!!!!!!!! Asynchronous JavaScript and event loops 

// Java script is a single-threaded programming language which means the JavaScript engine can only focus on one task at a time. Or has one call stack.

/*

When executing a script, the JavaScript engine executes code from top to bottom, line by line. In other words, it is synchronous.

Asynchronous means the JavaScript engine can execute other tasks while waiting for another task to be completed. For example, the JavaScript engine can:

Request for data from a remote server.
Display a spinner
When the data is available, display it on the webpage.
To do this, the JavaScript engine uses an event loop, which will be covered in the following tutorial.

*/


// !!!!! EXERCISES FROM THE FUNCTIONS BASICS LESSON


// create a function that takes a number and add it to 7

let add7 = function (number) {
    return number + 7
}

//invoke add7
console.log(add7(7))


// create a function that multiplies two values and returns the product

function multiply(x, y) {
    console.log(x * y)
}
// invoke multiply(x, y) function
multiply(7, 3)


// Write a function called capitalize that takes a string and returns that string with only
// the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

function capitalize(string) {

    if (string[0] == string[0].toUpperCase() && string.slice(1) == string.toLowerCase().slice(1)) {
        return string
    } else {
        // make all characters lowercase
        let word = string.toLowerCase();

        // capitalize the first letter
        let newString = word.charAt(0).toUpperCase() + word.slice(1)

        // return value
        return newString;
    }
    
}


console.log(capitalize('Aaron'))
console.log(capitalize('AARON'))
console.log(capitalize('Terrance'))
console.log(capitalize('AnTHOny'))
console.log(capitalize('everyday'))




// Write a function called lastLetter that takes a string and returns the very last letter of that string:

function lastLetter(string) {
    return string.charAt(string.length - 1)
}

alert(lastLetter('New York'))











