// let score = "33abc";

// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// let score_2 = null;
// console.log(Number(score_2)); // null

// let score_3 = undefined;
// console.log(Number(score_3)); // undefined

// let score_bool = true;
// console.log(Number(score_bool)); // 1

// CONVERSIONS

    // "33" => 33
    // "33abc" => NaN
    // true => 1 ; false => 0

// let isLoggedIn = 1;

// let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);

// 1 => true; 2 => false
// empty string "" => true
// string "yuvraj" => false

// let someNum = 23;

// let strNum = String(someNum);
// console.log(strNum);
// console.log(typeof strNum);

//*********************OPERATIONS***********************//

// let val = 100;
// let negVal = -val;
// console.log(negVal); // -100

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

// let str1 = "hello";
// let str2 = "yuvraj";
// let str3 = str1 + str2;
// console.log(str3); // helloyuvraj

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 1 + 2); // 112
// console.log(1 + 2 + "2"); // 32

// **** TRUE AND FALSE **** //

    // console.log(true); // true
    // console.log(false); // false
    // console.log(+true); // 1
    // console.log(+false); // 2

    let num1, num2, num3;
    num1 = num2 = num3 = 2 + 2;
    console.log(num1, num2, num3); // 4 4 4
    
    // **** INCREMENTS / DECREMENTS **** //
    
    let gameCounter = 100;
    gameCounter++;
    console.log(gameCounter);
    ++gameCounter;
    console.log(gameCounter);