"use strict"; // When used, all of the JS code will be treated as NEWER VERSION of JavaScipt code.

// alert(3+10); // Returns error when executed in Node.js (terminal). Runs only on browsers

/*

console.log(3*3); can also be written as ->

console.log(
    3 * 3
);

but, it is not GOOD PRACTICE to do so. It is not readable when we write code like that.

*/

// TYPES OF DATA

let name = "lorem ipsum";
let age = 99;
let isLoggedIn = true;

/* TYPES:
    1. PRIMITIVE
        number
        bigint
        string
        boolean
        null (null is a standalone value)
        undefined
        symbol
    2. NON-PRIMITIVE
        objects
        arrays
        functions
*/

// IMP
console.log(typeof null); // object
console.log(typeof undefined); // undefined