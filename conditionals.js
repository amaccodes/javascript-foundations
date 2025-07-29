// here is a link on comparisons, master it: https://javascript.info/comparison

// !!!!!! JavaScript if, else, and else if https://www.w3schools.com/js/js_if_else.asp

// The if, else, else if Statement
// Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

/*

SYNTAX: 

if (condition) {
    code goes here to execute some operation
} else if (condition) {
    code goes here to execute some operation
} else (condition) {
    code goes here to execute some operation
}

*/
let x = -7

if (x == 4) {
    console.log('x is, in fact 4!')
} else if (x > 4) {
    console.log('x is not equal to 4. womp. womp. the number is greater than anticipated.')
} else {
    console.log('I dont know math man.. stop asking me bruh')
}



//// !!!!!!!!!!!!! Logical Operators - https://javascript.info/logical-operators:

/* 

(OR) is ||

(AND) is &&

(NOT) is !

*/

// In classical programming, the logical OR is meant to manipulate boolean values only. 
// If any of its arguments are true, it returns true, otherwise it returns false.

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

// If an operand is not a boolean, it’s converted to a boolean for the evaluation.

// For instance, the number 1 is treated as true, the number 0 as false:

if (1 || 0) { // works just like if( true || false )
  alert( 'truthy!' );
}

// !! for more on logical operators and operands, continue to evaluate this link: https://javascript.info/logical-operators