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