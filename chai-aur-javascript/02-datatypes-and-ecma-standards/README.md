# Datatypes & ECMA Standards

- Today's JavaScript is much different than the JavaScript that was few years ago.

- To maintain the OLD code re-usable even after MODIFYING JavaScript, they decided to allow EXECUTION ENGINE to run the OLD JavaScript code as well as the NEWER JavaScript code.

- To differentiate the older JS code and newer JS code, we use "use strict" which specifies that all of the code is of newer JS.

- When "use strict" is used, all of the JS code will be treated as NEWER VERSION of JavaScipt code.

## Spacings & Readability

`console.log(3*3);` can also be written as ->

```javascript
console.log(
    3 * 3
);
```

but, it is not GOOD PRACTICE to do so. It is not readable when we write code like that.

## Data Types

1. PRIMITIVE
    - number
    - bigint
    - string
    - boolean
    - null (null is a standalone value)
    - undefined
    - symbol
2. NON-PRIMITIVE
    - objects
    - arrays
    - functions

## NOTE

- Type of null is an object and type of undefined values is undefined

```javascript
console.log(typeof null); // object
console.log(typeof undefined); // undefined
```