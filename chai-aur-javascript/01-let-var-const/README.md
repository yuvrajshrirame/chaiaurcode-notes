# Var
It is not used nowadays because, it does not follow a concept called SCOPE. Suppose, Whenever value is assigned to any variable of SCOPE_1, and when we update the same variable from SCOPE_2, the value changes (which is not what we want).

# Let
It replaces the VAR nowadays. It is used to assign variables. It covers all the drawbacks that were seen in VAR keyword

# Const
It is used whenever we dont want any value to be changed throughout the program (i.e. we want a constant value)

# Printing in JS
We use `console.log("your text goes here")` to print data.

For example: 
```
console.log("Hello World");
```
Output
```
Hello World
```

# Printing Data in Tabular Format
For printing data in tabular format we use, `console.table([keys])`.

Demonstration:
```
let name = "John";
var age = 23;
const surname = "Doe";
const username = "johndoe";
const password = "12233445";
let abc;

console.table([name, age, surname, username, password, abc]);
```
Output:
```
┌─────────┬────────────┐
│ (index) │   Values   │
├─────────┼────────────┤
│    0    │   'John'   │
│    1    │     23     │
│    2    │   'Doe'    │
│    3    │ 'johndoe'  │
│    4    │ '12233445' │
│    5    │ undefined  │
└─────────┴────────────┘
```