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


//การบ้าน

/*
Exercise #1
Maria has to calculate the cost of her payments for the month. 
For every transation there is a $3 fee and a 0.1% (0.01) interest fee. 
Can you help her calculate her costs?

Return the value of what she should be paying.*/

let maria = (transation) => {
    let transationFee = 3;
    let interestFee = 0.01;
    let interestAmount = interestFee * transation;
    let total = transation + transationFee + interestAmount;
    return total;

}

maria(1000)  //1013
console.log(maria(1000))

/*Exercise #2
Part 1
Ed would like a way to input 3 names of his friends. 
The output should be a console greeting to his friends saying: Welcome {name1}, {name2}, {name3}.

Part 2
Ed would like to create a function that takes in a birth year and returns the age.

i.e. 1990 returns 30

Part 3
Ed would like to create a function that prints out, Welcome {name1}, 
you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.

*/

let edfriend = (name1, name2 , name3) =>{
    console.log(`Welcome ${name1}, ${name2}, ${name3}`)
}
// edfriend('t','o','e')


let edfriendyear = (birthYear) => {
    const currentYear = new Date().getFullYear();
    const agenow =  currentYear - birthYear;
    return agenow;
}
edfriendyear(1990) //33


let printEdfriendwithAge = (name1, birthY1, name2, birthY2, name3, birthY3) => {
    const age1 = edfriendyear(birthY1)
    const age2 = edfriendyear(birthY2)
    const age3 = edfriendyear(birthY3)
    console.log(`Welcome ${name1}, you are ${age1}. 
Welcome ${name2}, you are ${age2}. 
Welcome ${name3}, you are ${age3}.`)
}


printEdfriendwithAge('Toey',1990,'Hate',1985,'Java',1995);


//A teacher wants to create a rubric for grading. The rubric is from 0 - 11.
/*
Part 1
A student passes if they have a score greater than or equal to 5. Create a function that returns a boolean true or false.

Part 2
A student has an excellent grade if they score higher than 8. Add on to your function to print out "Excellent" for scores greater than 8.

Part 3
A student has a perfect grade if their score is 11. Add on to your function to print out "Perfect" for a score of 11.
*/

let rubric = (pt) => {
    
    if(pt >=5 ) {
      if(pt > 8){
        console.log('Excellent')
      }
      if(pt === 11){
        console.log('Perfect')
      }
      return true;
    } else {
      return false;
    }
}

rubric(5)
rubric(8)
rubric(9)
rubric(11)
