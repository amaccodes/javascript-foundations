
// basic syntax of an object
let user = {
    firstName: 'Aaron',
    lastName: 'McDonald',
    school: 'Harvard College',
    hometown: 'Staten Island, NY'
}
// show in the console the firstName key-value
console.log(user.firstName)


// a function that returns an object 

function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let userr = makeUser("John", 30);
alert(userr.name); // John



// !! Exercises 

// !! Map to name:
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names =  [john.name, pete.name, mary.name]
console.log( names ); // John, Pete, Mary

// or

let namez = users.map((item) => item.name)
console.log(namez)


// !! Map to object:

john = { name: "John", surname: "Smith", id: 1 };
pete = { name: "Pete", surname: "Hunt", id: 2 };
mary = { name: "Mary", surname: "Key", id: 3 };

users = [ john, pete, mary ];

let usersMapped = users.map(user => ({
    fullName: user.name + ' ' + user.surname,
    id: user.id
}))

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith



// !! Sort users by age

john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 28 };

arr = [ pete, john, mary ];

function sortByAge(array) {
    array.sort((a, b) => a.age - b.age)
}

sortByAge(arr);

// now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete



// !! Get average age 

john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 29 };

arr = [ john, pete, mary ];

function getAverageAge(array) {
    ans = array.reduce((acc, curr) => 
        acc + curr.age
    , 0)
    return ans / array.length
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28



// !! Create keyed object from array

users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value
        return obj
    }, {})
}

let usersById = groupById(users);

console.log(usersById)

/*
 after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/


