import {greeting} from "./greeting.js"
import './style.css'
// we import the css stylesheet because we use css-loader package to process stylesheet and 
// then style-loader to transform it into javascript code. Therefore we do not need to tag it in the html file.

console.log(greeting)