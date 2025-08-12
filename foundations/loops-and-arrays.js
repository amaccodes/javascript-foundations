// !!!!!!! Loops 


/*

Computers don’t get tired, and they’re really, really fast! For that reason, they are well suited
to solving problems that involve doing calculations multiple times. In some cases, a computer will 
be able to repeat a task thousands or even millions of times in just a few short seconds where it might 
take a human many hours (obviously, speed here depends on the complexity of the calculation and the 
speed of the computer itself).

To repeat a set of instructions multiple times, we can use a loop. Go through the following resources 
on loops. Some of them will contain examples that use arrays, which we will go through in more detail 
in the next section, but for now it will suffice to know that arrays are just lists of items.

*/

// checkout more on loops and collections: 

// - https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops

// - https://javascript.info/while-for


// most of the time when you have a collection of items and want to modify them in some way you will use
//!! the for.. of loop

// the for.. of loop will help you modify all the items in a list of items (collections)
let cats = ['garfield', 'gerald', 'adam', 'foozy', 'jakey']

for (const cat of cats) {
    console.log(cat)
}



// JavaScript also has two other specialized loops for collections, they are called the:
// !!!! map() and filter()

// !! The map() loop method 
// You can use map() to do something to each item in a collection 
// and create a new collection containing the changed items:

function toUpper(string) {
    return string.toUpperCase()
}

// notice how map() intakes a function within its parenthesis
const upperCats = cats.map(toUpper)
console.log(upperCats)

// !! The filter() loop method
// You can use filter() to test each item in a collection, and create
// a new collection containing only items that match:

function startsWithA(string) {
    string = string.toUpperCase()
    return string.startsWith('G')
}

const filtered_names = cats.filter(startsWithA)
console.log(filtered_names)

// This looks a lot like map(), except the function we pass in returns a boolean: if it returns true,
// then the item is included in the new array. Our function tests that the item starts with the letter 
// "L", so the result is an array containing only cats whose names start with "L":



// in some instances you simply just want to run the same code for a multiple amount of times, that is 
// when the // !! for loop comes in:

const n = 5

for (i = 1; i <= n; i++) {
    console.log(i)
}

/*

for (initializer; condition; final-expression) {
    ! code goes here
}

Inside the parentheses we have three items, separated by semicolons:

An initializer — this is usually a variable set to a number, which is incremented to count the number of times the loop has run. It is also sometimes referred to as a counter variable.
A condition — this defines when the loop should stop looping. This is generally an expression featuring a comparison operator, a test to see if the exit condition has been met.
A final-expression — this is always evaluated (or run) each time the loop has gone through a full iteration. It usually serves to increment (or in some cases decrement) the counter variable, to bring it closer to the point where the condition is no longer true.

*/

// !!! Exiting loops with BREAK statement 
// coding example:

const names = ['Aaron', 'Terrance', 'Josh', 'Derek', 'Anthony', 'Duke', 'Jackie']

for (i = 0; i < names.length; i++) {
    if (names[i] == 'Duke') {
        break
    } else if (names[i] != 'Derek') {
        console.log(names[i])
    }
}

// trick: when dealing with break statement in loops you want them to be first in the order of the statements


// !!! proceeding to the next iteration with the CONTINUE statement 

// I want to log on the console only even numbers 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

for (i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) != 0) {
        continue;
    } else {
        console.log(numbers[i])
    }
}


// syntax for //!! WHILE loop

/*

initialization
while (condition) {

    !!code goes here

    final-expression
}

*/

// ex snippet:

// I only want the square of odd numbers 

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

i = 0;

while (i < nums.length) {
    if ((nums[i] % 2) != 0) {
        let answer = nums[i] ** 2
        console.log(answer)
    } 

    i++
}

// !! DO loop example:

i = 0

do {
    if ((nums[i] % 2) != 0) {
        let answr = nums[i] ** 2
        console.log(answr)
    }

    i++
} while (i < nums.length)



// Exercise 

function sumOfTripledEvens(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        if ((array[i] % 2) == 0) {
            tripled = array[i] * 3
        } else {
            continue
        }
        sum += tripled
    }
    console.log(sum)
}

sumOfTripledEvens(nums)


// !!! The map method - the main thing is that the map() method expects a callback as an argument. or a function as an argument.

/*

map is one such function. It expects a callback as an argument, which is a fancy way to say “I want you to pass another function as an argument to my function”.

Let’s say we had a function addOne, which takes in num as an argument and outputs that num increased by 1, and an array of numbers, [1, 2, 3, 4, 5]. Let’s say we’d like to increment all of these numbers by 1 using our addOne function.

Instead of making a for loop and iterating over the above array, we could use our map array method instead, which automatically iterates over an array for us. We don’t need to do any extra work aside from simply passing the function we want to use in:

*/

function addOne(number) {
    return ++number
} 

nums = [1,2,3,4,5,6,7,8,9]

let updatedNums = nums.map(addOne)

console.log(updatedNums)


// !!! The filter method - it expects a boolean as callback. or a function as an arguement that returns a boolean

// say I only want to have a list of the even number values 

// we have:

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function isEven(number) {
    new_num = number.toString()
    if (new_num[0] === '1') {
        return true
    } else {
        return false
    }
}

let answr = nums.filter(isEven)
console.log(answr)

// !!! The reduce method  

/*

It takes an array and “reduces” it to a single value by running a function on each element one by one.

You give it:

A callback function (what to do with each item)

An initial value (where to start)

And it gives you one final result.

SYNTAX:

The callback function takes two arguments instead of one. The first argument is the
!! accumulator:



which is the current value of the result at that point in the loop. The first time through, this 
value will either be set to the initialValue (described in the next bullet point), or the first 
element in the array if no initialValue is provided. The second argument for the callback is the 
current value, which is the item currently being iterated on.

.reduce itself also takes in an initialValue as an optional second argument (after the callback), 
which helps when we don’t want our initial value to be the first element in the array. For instance, 
if we wanted to sum all numbers in an array, we could call reduce without an initialValue, but if we 
wanted to sum all numbers in an array and add 10, we could use 10 as our initialValue.

array.reduce((accumulator, currentItem) => {
    code goes here: do something and return the new accumulator
}, initialValue);

*/


let arr = [1, 2, 3, 4, 5];
const productOfAllNums = arr.reduce((total, currentItem) => {
  return total * currentItem;
}, 1);
console.log(productOfAllNums); // Outputs 120;
console.log(arr); // Outputs [1, 2, 3, 4, 5]


arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function isEven(number) {
    if ((number % 2) == 0) {
        return true
    } else {
        return false
    }
}

function tripleNumber(number) {
    return number * 3
}



function sumOfTripledEvenz(array) {
    // use the filter method
    let filteredNumbers = array.filter(isEven)
    console.log(filteredNumbers)

    // use the map method - triple each number
    let tripledNumbers = filteredNumbers.map(tripleNumber)
    console.log(tripledNumbers)

    // use the reduce method 
    let num = tripledNumbers.reduce(
        (total, currentValue) => {
        return total + currentValue
        }
    )

    console.log(num)
}

sumOfTripledEvenz(arr)


// OR:

function sumOfTripledEvenss(array) {
    let filtered_nums = array.filter((num) => num % 2 === 0)
    let tripled_nums = filtered_nums.map((num) => num * 3)
    let final = tripled_nums.reduce((acc, curr) => acc + curr)
    //alert(final)
}

sumOfTripledEvenss(arr)

// OR:

function sumOfTripledEvensss(array) {
    let final = array.filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr)
    
    //alert(final)
}

sumOfTripledEvensss(arr)





// !!!!!!!!!! ASSIGNMENT ---------------------------------------------------


// !! Exercise 1: Translate border-left-width to borderLeftWidth

function camelize(str) {
    // get rid of the dashes split '-'
    let strings = str.split('-')
    console.log(strings)

    // loop through all of the words other than the first one
    for (i = 1; i < strings.length; i++) {
        strings[i] = strings[i][0].toUpperCase() + strings[i].slice(1)
    }

    // join without the commas
    final = strings.join('')
    console.log(final)
}

words = ['background-noise', 'list-style-image', '-webkit-transition']

for (word of words) {
    camelize(word)
}



// !! Exercise 2: Filter range

function isInRange(number, a, b) {
    if (a <= number && b >= number) {
        return true
    } else {
        return false
    }
}

function filterRange(array, a, b) {
    return array.filter(num => isInRange(num, a, b))
}

arr = [5, 3, 8, 1]

let x = filterRange(arr, 1, 4)

console.log(x)


// !! Exercise 3: Sort decreasing order

function decreasingOrder(array) {
    final = array.sort((a, b) => a - b)
    console.log(final)
}

arr = [5, 2, 1, -10, 8]

decreasingOrder(arr)


// !! Exercise 4: Copy and sort array

arr = ["HTML", "JavaScript", "CSS"];

function copySorted(array) {
    return array.slice().sort() // the .slice() saves the unmodified version of the array to its original name which in this case is arr
}
console.log(arr)

final = copySorted(arr)

console.log(arr)

console.log(final)


