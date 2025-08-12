// !!!!! DECLARING STRINGS 

// double quotes 
let firstName = "Aaron"
// sigle quotes
const middleName = 'Ronald'
// backticks
let lastName = `McDonald`




// !!!!! ATTENTION: single and double quotes work exactly the same. 

// Backticks function similarly but with them you can embed JavaScript. this is called templat literals.

const name = 'Chris'
const greeting = `Hello, ${name}`
console.log(greeting)

// you can do this as well

const question = 'how are you?'
const greeting_ = 'Hello, '
const combination = `${greeting_}${question}`
console.log(combination)







// !!!!! CONCATENATION USING '+'
// this is nice when working with normal strings with single or double quotes 

const string1 = 'Hello, '
const string2 = 'Aaron. How are you doing today brotha?'
console.log(string1 + string2)


// You can include JavaScript expressions in template literals, as well as just variables,
// and the results will be included in the result:

let restaurant = 'McDonald\'s'
let score = 9
let highestScore = 10
console.log(`My favorite restaurant is ${restaurant}. That is why I gave it a score of ${(score / highestScore) * 100}% satisfaction rate.`)



// !!!!!!!! Multiline strings
// Template literals respect the line breaks in the source code, so you can write strings that span multiple lines like this:


const newLine = `Hello.
how you been brotha?`
console.log(newLine) // the result is the output reflects the line breaks


// to have the same output with normal strings you can simply use \n
let string = 'Dear Diary,\nI haven\'t been feeling like myself recently.'
console.log(string)


// !!!!!!!!! WHAT HAPPENS WHEN WE TRY TO CONCATENATE A NUMBER AND A STRING (MORE SPECIFICALLY A WORD)?

const word = 'Air Jordan '
let number = 1
console.log(word + number) // the result is the two strings are combined as is
console.log('The type of the previous value is: ' + typeof (word + number))


// !!!!!! HOW TO CONVERT NUMBERS AND STRINGS TO THE OTHER TYPE:

// the Number() function - converts any values passed through it into a number if possible
string = '123'
console.log(typeof string)
string = Number(string)
console.log(typeof string)


// the String() function - converts any value passed through it into a string
number = 2025
console.log(typeof String(number))











// !!!!!!!!!!!!!!!!!!! JavaScript String Methods !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// view these links to see all of the documentation:
// https://www.w3schools.com/js/js_string_methods.asp and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// Just some of the methods access the rest at the links!
// !!! JavaScript String Length
// The length property returns the length of a string:

let text = 'Hello World'
console.log(text.length)


// !!!!!!!!!!! Extracting String Characters
// there are four methods to do this
/* 

- The at(position) Method
- The charAt(position) Method
- The charCodeAt(position) Method
- Using property access [] like in arrays

*/

// charAt() - The method returns the character at a specified index (position) in a string:
console.log(text.charAt(0))

// charCodeAt() - The method returns a UTF-16 code (an integer between 0 and 65535).
console.log(text.charCodeAt(0))

// codePointAt() - returns a UTF-16 code (an integer between 0 and 65535)
console.log(text.codePointAt(0))

// access the character
let char = text[0];
alert(char)





