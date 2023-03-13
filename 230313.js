/*
Create a day of the week translator.
Your program should read a variable called “dayNumber”,
and print (with console.log) the corresponding day of the week, where 0 is Sunday and 6 is Saturday.
For any other values, your program should print “Invalid day number”.
Test your program for all week days values.
*/

let dayNumber = 99;
switch(dayNumber) {
  case 0 : 
    console.log('Sunday')
  break;
  case 1 : 
    console.log('Monday')
  break;
    case 2 : 
    console.log('Tuesday')
  break;
    case 3 : 
    console.log('Wednesday')
  break;
    case 4 : 
    console.log('Thursday')
  break;
    case 5 : 
    console.log('Friday')
  break;
    case 6 : 
    console.log('Saturday')
  break;
    default: console.log("Invalid day number");
  break;
}

let dayNumber2 = 0; // change this value to test different days

if (dayNumber2 === 0) {
  console.log("Sunday");
} else if (dayNumber2 === 1) {
  console.log("Monday");
} else if (dayNumber2 === 2) {
  console.log("Tuesday");
} else if (dayNumber2 === 3) {
  console.log("Wednesday");
} else if (dayNumber2 === 4) {
  console.log("Thursday");
} else if (dayNumber2 === 5) {
  console.log("Friday");
} else if (dayNumber2 === 6) {
  console.log("Saturday");
} else {
  console.log("Invalid day number");
}

//ex.2

let password = 'password';

password.length >= 12 
? console.log('password is very strong so WELCOME') 
: password.length >= 8
? console.log('password is ok') 
: console.log('password is tooshortttt');


if (password.length >= 12) {
console.log('password is very strong so WELCOME');
} else if (password.length >= 8) {
console.log('password is ok');
} else {
console.log('password is tooshortttt');
}


//ex.3
info('wowowowow')
function info(name) {
  console.log(name);
}


const myinfo = function(name) {
  console.log(name);
}
info('wowow2owow')  //อันนี้ต้องเขียนก่อนค่อยเรียกใช้ ไม่เหมือนข้างบน เรียกใช้ก่อนก็ได้

//arrow functions
let infoaarr = name => console.log(name);
infoaarr('arrrorowoow')

let addNum = (a, b) => a + b;
addNum(1, 5);
console.log(addNum(1,5)) //6


let koon = (a, b) => a * b;
let x = koon(3, 5);
let y = x;
console.log(x) //15


//โจทย์ในห้อง
/*
add(a, b)
subtract(a, b)
multiply(a, b)
divide(a, b)
*/


let add = (a, b) => a + b ;
let subtract = (a, b) => a / b ;
let multiply = (a, b) => a * b ;
let divide = (a, b) => a - b;

add(1,2);
subtract(10, 5)
multiply(55, 2)
divide(10, 4)

/*another exercise Create Function Inform---
console.log("Hi, my name is " + firstName + "I live in " + location + "and enjoy "+hobby);*/

let hi = (firstName,location,hobby) => {
console.log(`Hi, my name is ${firstName} I live in ${location} and enjoy ${hobby}`);
}
hi("eiei", "Yorkkkkk", "playing slepp");