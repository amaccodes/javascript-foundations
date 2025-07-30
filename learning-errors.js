// !!!!!!!!!!!! UNDERSTANDING ERROR MESSAGES IN JAVASCRIPT

/*

--- Reference Error:
A ReferenceError is thrown when one refers to a variable that is not declared and/or initialized within the current scope. 

documentation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError



--- Syntax Error:
A syntax error occurs when the code you are trying to run is not written correctly, i.e., in accordance with the grammatical rules of JavaScript.

documentation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError

--- Type Error:

!!! Advice for type errors: 
A good note to keep in mind when faced with a TypeError is to consider the data type you are trying to run a method or operation against. You’ll 
likely find that it is not what you think, or the operation or method is not compatible with that type.

This error occurs when:
 - an operand or argument passed to a function is incompatible with the type expected by that operator or function;
 - or when attempting to modify a value that cannot be changed;
 - or when attempting to use a value in an inappropriate way.

 Notorious for saying 'x' is not a function, what it is really saying is you are using the function wrong like when you use a string method on an array

documentation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError


--- Stack trace


!!Ex code:

const a = 5;
const b = 10;

function add() {
  return c;
}

function print() {
  add();
}

print();

!! corresponding console output (error message, stack trace format):
see on this link you have to scroll a little to see it: https://www.theodinproject.com/lessons/foundations-understanding-errors



*/