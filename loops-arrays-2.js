//!! More array methods 



// !! Splice method - insert, remove, replace

// you can use delete statement but it only deletes the object and not the indexed element, index in the array just becomes undefined 


let list = ["I", "go", "home"];

delete list[1]; // remove "go"

console.log( list[1] ); // undefined

// now arr = ["I",  , "home"];
console.log( list.length ); // 3


list = ["I", "go", "home"];

list.splice(0, 1)
console.log(list)

list.splice(0, 1, 'I', 'don\'t', 'ever', 'want', 'to', 'come', 'back')

console.log(list)




// Step 1:

// TODO: complete the exercises and read both articles in the these links: https://javascript.info/array-methods#tasks & https://javascript.info/array

//!! Filter range "in place"

function filterRangeInPlace(array, a, b) {
    for (i = 0; i < array.length; i++) {
        let val = array[i]

        if (val < a || val > b) {
            array.splice(i, 1)
        }
    }
    return array
}

let arr = [5, 3, 8, 1];
console.log(filterRangeInPlace(arr, 1, 4))
alert(arr)


//!! COpy and sort array

 arr = ["HTML", "JavaScript", "CSS"];

function copySorted(array) {
    // sort the array and copy it
    return array.slice().sort() // .slice() with no arguments copies the entire array
}

let ans = copySorted(arr)

console.log(ans)
console.log(arr)

// !! Shuffle an array

arr = [1, 2, 3]

function shuffle(array) {
    ans = array.sort(() => Math.random() - 0.5);
    console.log(ans)
}

shuffle(arr)


// !! Filter unique array members

function unique(array) {
    results = []
    for (str of strings) {
        if (results.includes(str) == false) {
            results.push(str)
        }
    }
    console.log(results)
}


let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

unique(strings) 


// Step 2: 

// TODO: finish the array methods exercises 
/*

- Filter range "in place"
- Copy and sort array
- Shuffle an array
- Filter unique array members

*/

// Step 3:

// TODO: follow the video exercises 

// 04 - Array Cardio Day 1 - https://www.youtube.com/watch?v=HB1ZC7czKRs
// 07 - Array Cardio Day 2 - https://www.youtube.com/watch?v=QNmRfyNg1lw


// Step 4:

// TODO: finish the JavaScript exercises repo and review each README.md

/*

- 06_repeatString
- 07_reverseString
- 08_removeFromArray
- 09_sumAll
- 10_leapYears
- 11_tempConversion

*/





