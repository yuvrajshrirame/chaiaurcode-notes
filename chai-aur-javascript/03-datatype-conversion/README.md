# Datatype Conversion

Conversion of one datatype into another can be understood using example given below:

``` javascript
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);
```
Output:
```
string
number
NaN
```

> NOTE: Similarly, we can use other datatypes to convert them (e.g. String, Number, etc).

> Make sure the first letter is capital (e.g. S in String)

More examples:

1. ```javascript
    let someNum = 23;
    let strNum = String(someNum);
    console.log(strNum);
    console.log(typeof strNum);
    ```
    Output:
    ```
    23
    string
    ```

# Operations

There exists many operations in JavaScript which are demonstrated below in a code snippet -

```  javascript
    console.log(2+2);
    console.log(2-2);
    console.log(2*2);
    console.log(2**2);
    console.log(2/2);
    console.log(2%2);
```

Output:
```
    4
    0
    4
    4
    1
    0
```

## Adding 2 strings
We can add 2 strings using + operator
``` javascript
    let str1 = "hello";
    let str2 = "yuvraj";
    let str3 = str1 + str2;
    console.log(str3); // helloyuvraj
```

Output
```
    helloyuvraj
```

## Guidelines of Operators in JS

``` javascript
    console.log("1" + 2); // 12
    console.log(1 + "2"); // 12
    console.log("1" + 1 + 2); // 112
    console.log(1 + 2 + "2"); // 32
```

- If string comes first, then, whole operands are considered as strings

- If numbers come first, then, all the numbers till the strings are considered as numbers and the string is concatenated in the end. (as shown in above code snippet)

## Playing with Operators and Boolean Values

```javascript
console.log(true); // true
console.log(false); // false
console.log(+true); // 1
console.log(+false); // 2
```

## Increments / Decrements

```javascript
let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);
```