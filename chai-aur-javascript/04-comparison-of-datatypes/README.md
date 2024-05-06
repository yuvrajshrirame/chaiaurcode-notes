# Comparisons

Let's understand comparison using the below code snippet -
```javascript
console.log(1 > 2); // false
console.log(1 < 2); // true
console.log(1 == 2); // false
console.log(1 != 2); // true
console.log(1 >= 2); // false
console.log(1 <= 2); // true
```

## Comparing strings with numbers
- JS implicitly converts string to numbers

```javascript
    console.log("2" > 1); // true
    console.log("02" > 1); // true
```

## Comparing NULL with numbers
- Avoid such conversions
```javascript
    console.log(null > 0); // false
    console.log(null < 0); // false
    console.log(null >= 0); // true
```
- The reason the `null >= 0` is true because: that an equality check == and comparisons (>,<,=) works differently.
- Comparisons converts null to a number, treating it as 0. That's why in third line `null >= 0` is true and `null > 0` is false

## Comparing UNDEFINED with numbers
- Avoid such conversions
```javascript
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0); // false
```
- Here the difference is that, all the values will be false

## Comparing STRICTLY

```javascript
console.log("2" === 2); // false
```
- Output will be false because it will check the type, which in this case is different