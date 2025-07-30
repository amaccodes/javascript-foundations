// !!!!!!!!!! FUNCTIONSSS

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









