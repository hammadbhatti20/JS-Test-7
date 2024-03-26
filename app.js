//Chapter No: 26-30

//Q1
// var userInput = +prompt("Enter Num Value");
// var num = userInput;
// var roundOff = Math.round(userInput);
// var floorVal = Math.floor(userInput);
// var ceilVal = Math.ceil(userInput);

// document.write(`number: ${userInput} </br> round off value: ${roundOff} </br> floor value: ${floorVal} </br> ceil value: ${ceilVal}`);

//Q2
// var userInput = +prompt("Enter Neg Num Value");
// var num = userInput;
// var roundOff = Math.round(userInput);
// var floorVal = Math.floor(userInput);
// var ceilVal = Math.ceil(userInput);

// document.write(`number: ${userInput} </br> round off value: ${roundOff} </br> floor value: ${floorVal} </br> ceil value: ${ceilVal}`);

//Q3
// var userInput = +prompt("Enter Num Value");
// var negVal = Math.ceil(Math.random() * userInput + 1);

// document.write(`The absolute value of ${userInput} is ${negVal}`);

//Q4
// var dice = 7;
// var result = Math.floor(Math.random() * dice);

// document.write(`random dice value: ${result}`);

//Q5
// var heads = 2;
// var result = Math.ceil(Math.random() * heads);

// var tails = 2;
// var result2 = Math.ceil(Math.random() * tails);

// document.write(`${result} </br> random coin value: Heads </br> </br> ${result2} </br> random coin value: Tails`);

//Q6
// var randNUm = Math.ceil(Math.random() * 100);

// document.write(`random number between 1 and 100: ${randNUm}`);

//Q7
// var userInput = prompt("Enter Your Weight");
// var roundVal = Math.round(userInput);
// var floorVal = Math.floor(userInput);
// var ceilVal = Math.ceil(userInput);

// document.write(`The weight of user is kilograms ${userInput} </br> The weight of user is kilograms ${roundVal} </br> The weight of user is kilograms ${floorVal} </br> The weight of user is kilograms ${ceilVal} `);

//Q8
// var secNum = Math.ceil(Math.random() * 10);
// var userInput = +prompt("Enter Your Value From 1 to 10");
// console.log(secNum, userInput);

// if(userInput == secNum) {
//     alert("Congrates you win");
// } else {
//     alert("Better luck next time");
// }


//Chapter 26 (Rounding Numbers)

//Q1
// var num = 5.5;
// console.log(num);
// console.log(Math.round(num));

//Q2
// var origNum = 3.5;
// var roundNum = Math.round(origNum);
// console.log(origNum);
// console.log(roundNum);

//Q3
// var origNum = 3.5;
// var roundNum = Math.floor(origNum);
// console.log(origNum);
// console.log(roundNum);

//Q4
// var origNum = 3.5;
// var roundNum = Math.round(origNum);
// console.log(origNum);
// console.log(roundNum);

//Q5
// var origNum = 0.5;
// var roundNum = Math.floor(origNum);
// console.log(origNum);
// console.log(roundNum);


//Chapter 27 (Random Numbers)

//Q1
// var randNum = Math.floor(Math.random() * 51);
// console.log(randNum);

//Q2
// var ranNum = Math.random();
// var newNum = ranNum;
// console.log(newNum); 

//Q3
// var dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

//Q4
// var toss = Math.floor(Math.random() * 2);
// if(toss == 0) {
//     alert(`Heads Win`);
//     console.log(toss);
// } else {
//     alert(`Tails Win`);
//     console.log(toss);
// }


//Chapter 28, 29 (Converting Strings)

//Q1
// var num = 123;
// var str = num.toString();
// console.log(num);
// console.log(str);

//Q2
// var str = '123';
// var num = Number(str);
// console.log(str);
// console.log(num);

//Q3
// var str = "3.14159";
// var floatValue = parseFloat(str);
// console.log(str);
// console.log("Floating-point number:", floatValue);

//Q4
// // Function to check if the string can be converted to an integer
// function isInteger(str) {
//     return /^\d+$/.test(str) || /^-\d+$/.test(str);
// }

// // Function to check if the string can be converted to a decimal
// function isDecimal(str) {
//     return /^-?\d*\.?\d+$/.test(str);
// }

// // Test cases
// let integerStr = "123";
// let decimalStr = "123.45";
// let nonNumericStr = "abc";
// let negativeIntegerStr = "-123";
// let negativeDecimalStr = "-123.45";

// console.log(integerStr + " can be converted to integer:", isInteger(integerStr));
// console.log(decimalStr + " can be converted to decimal:", isDecimal(decimalStr));
// console.log(nonNumericStr + " can be converted to integer:", isInteger(nonNumericStr));
// console.log(negativeIntegerStr + " can be converted to integer:", isInteger(negativeIntegerStr));
// console.log(negativeDecimalStr + " can be converted to decimal:", isDecimal(negativeDecimalStr));

//Q5
// var num = 123;
// var str = num.toString();
// console.log(num);
// console.log(str);

//Q6
// var num = 42;
// var str = num.toString();
// console.log(num);
// console.log(str);

//Q7
// var str = '3.14';
// var num = Number(str);
// console.log(str);
// console.log(num);


//Chapter 30 (Controlling the length of decimals)

//Q1
// var num = 3.5;
// var roundNum = Math.round(num);
// var str = roundNum.toString();
// var newNum = str;
// console.log(num);
// console.log(roundNum);
// console.log(str);
// console.log(newNum);

//Q2
// var a = 1.5;
// var str = a.toString();
// var num = Number(str);
// a = num;
// console.log(a);
// console.log(str);
// console.log(num);
// console.log(a);

//Q3
// var num = 2
// if ((Math.round(num * 100) / 100).toFixed(2).toString().length > 4) {
//     console.log(true);
// } else {
//     console.log(false);
// }

//Q4
// var decNum = 1.50;
// var num = Math.round(decNum);
// var str = num.toString();
// alert(`${num} is converted to String ${str}`);
// console.log(decNum);
// console.log(num);
// console.log(str);