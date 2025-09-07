console.log('Hello World!')


/*

!!! Exercise

Write a constructor for making “Book” objects. We will revisit 
this in the next project. Your book objects should have the book’s 
title, author, the number of pages, and whether or not you have 
read the book.

! Put a function into the constructor that can report the book info like so:

theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

Note: It is almost always best to return things rather than putting
 console.log() directly into the function. In this case, return the info 
 string and log it after the function has been called:

console.log(theHobbit.info());

*/

// !!! Object constructor


function Book(title, author, pages, readBook) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readBook = readBook
    this.info = function () {
        if (readBook === true) {
            console.log(`${title} by ${author}, is ${pages} pages, the book was read`)
        } else {
            console.log(`${title} by ${author}, is ${pages} pages, not read yet`)
        }
    }
}

let readBook = false

const favoriteBook = new Book('The Holy Bible', 'God', '~1200', readBook)

favoriteBook.info()



// !!!! Object prototypes 

// All objects in javascript have a prototype. This prototype is
// another object that the original object inherits from, and has 
// access to all the prototype's methods and properties

// giving the prototype of an object a function 
Book.prototype.isGood = function () {
    console.log(`This book is good!`)
}
// run this in the browsor developer console, this is how you can access it!! 
console.log(Object.getPrototypeOf(favoriteBook))


console.log(Object.getPrototypeOf(Book.prototype))


console.log(Object.getPrototypeOf(favoriteBook) === Book.prototype)


// by defualt every object has a parent prototype which is Object.prototype
console.log(Object.getPrototypeOf(Object.prototype))// this will be null because the Object.prototype does not have a prototype





