// DOM Methods


// !! Query selectors:

// element.querySelector(selector) - returns a reference to the first match of selector.

// element.querySelectorAll(selectors) - returns a “NodeList” containing references to all of the matches of the selectors.
// attention: Nodelist can be transformed into arrays using Array.from()



// !! Element Creation:

// document.createElement(tagName, [options]) 
 
// - creates a new element of tag type tagName. [options] in this case means you can 
// add some optional parameters to the function. Don’t worry about these at this point.

const divv = document.createElement('div') // created a div element in memory

// This function does NOT put your new element into the DOM - it creates it in memory. This 
// is so that you can manipulate the element (by adding styles, classes, ids, text, etc.) before 
// placing it on the page. You can place the element into the DOM with one of the following methods.



// !! Appending elements

// parentNode.appendChild(childNode) - appends childNode as the last child of parentNode.

// parentNode.insertBefore(newNode, referenceNode) - inserts newNode into parentNode before referenceNode.



// !! Remove elements

// parentNode.removeChild(child) - removes child from parentNode on the DOM and returns a reference to child.



// !! Adding inline style

// adds the indicated style rule to the element in the div variable
divv.style.color = "blue";

// adds several style rules
divv.style.cssText = "color: blue; background: white;";

// adds several style rules
divv.setAttribute("style", "color: blue; background: white;");



// dot notation with kebab case: doesn't work as it attempts to subtract color from div.style.background
// equivalent to: div.style.background - color
//divv.style.background-color; // wrong

// dot notation with camelCase: works, accesses the divv's background-color style
divv.style.backgroundColor;

// bracket notation with kebab-case: also works
divv.style["background-color"];

// bracket notation with camelCase: also works
divv.style["backgroundColor"];





// !! Editing attributes 

// if id exists, update it to 'theDiv', else create an id with value "theDiv"
divv.setAttribute("id", "theDiv");

// returns value of specified attribute, in this case "theDiv"
divv.getAttribute("id");

// removes specified attribute
divv.removeAttribute("id");




// !! Working with classes 

// adds class "new" to your new div
divv.classList.add("new");

// removes "new" class from div
divv.classList.remove("new");

// if div doesn't have class "active" then add it, or if it does, then remove it
divv.classList.toggle("active"); // It is often standard (and cleaner) to toggle a CSS style rather than adding and removing inline CSS.





// !! Adding text content

divv.textContent = 'Hello World!'


// !! Adding HTML content 
divv.innerHTML = '<span>Hello World!</span>'

// Note that using textContent is preferred over innerHTML for adding text, as innerHTML should be used sparingly to avoid
// potential security risks. To understand the dangers of using innerHTML, watch this video about preventing the most common 
// cross-site scripting attack.

const parentNode = document.querySelector('#container')

const text = document.createElement('p')
text.style.cssText = "color: red;"
text.textContent = 'Hey I\'m red!'


parentNode.appendChild(text)


const h3 = document.createElement('h3')
h3.style.cssText = "color: blue;"
h3.textContent = 'I\'m a blue h3!'

parentNode.appendChild(h3)

// create new div element 
const newDiv = document.createElement('div')
// added a class to it called 'new'
newDiv.classList.add('new')

parentNode.appendChild(newDiv)

// defined the div as a parent node 
const divParent = document.querySelector('div .new')

const imDIvtext = document.createElement('h1')
imDIvtext.textContent = 'I\'m in a div'

const pElement = document.createElement('p')
pElement.textContent = 'ME TOO!'


divParent.appendChild(imDIvtext)
divParent.appendChild(pElement)



// !! Events 

/*

Now that we have a handle on manipulating the DOM with JavaScript, the next step is learning 
how to make that happen dynamically or on demand! Events are how you make that magic happen on 
your pages. Events are actions that occur on your webpage, such as mouse-clicks or key-presses. 
Using JavaScript, we can make our webpage listen to and react to these events.

There are three primary ways to go about this:

 1. You can specify function attributes directly on your HTML elements.
 2. You can set properties in the form of on<eventType>, such as onclick or onmousedown, on the DOM nodes in your JavaScript.
 3. You can attach event listeners to the DOM nodes in your JavaScript.
 
Event listeners are definitely the preferred method, but you will regularly see the others in 
use, so we’re going to cover all three.

*/


// !! Method 1: Function attributes 

 // This solution is less than ideal because we’re cluttering our HTML with JavaScript. Also, we 
 // can only set one “onclick” property per DOM element, so we’re unable to run multiple separate 
 // functions in response to a click event using this method.

// view index.html to see it in action


// !! Method 2: attach function to the node in JavaScript

const btn = document.querySelector('#btn')
//btn.onclick = () => {alert('Hello World!')}


// !! Method 3: use the event listener in Javascript

const button = document.querySelector('#button')

button.addEventListener('click', () => {
    alert('Hello World!')
})

/*

btn.addEventListener("click", function (e) {
  console.log(e);
}); // this shows different properties of the event 

*/ 


/*
btn.addEventListener("click", function (e) {
  console.log(e.target);
}); // this shows the html element of the button

*/

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
}); // changes the background color of the button on click




