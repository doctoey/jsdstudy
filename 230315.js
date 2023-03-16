const number = [3,4];

number.push(5,6)  // ต่อหลัง
console.log(number)  //[ 3, 4, 5, 6 ]

number.unshift(1,2) // นำไปไว้ข้างหน้า
console.log(number)   //[ 1, 2, 3, 4, 5, 6 ]

number.splice(2,0,'a')   //เพิ่มสมาชิก ตรง index ที่ 2 ปกติ method นี้ จะใช้ลบ แต่ถ้าไม่ลบ ก็เป็น index 0 แทน เพราะเราไม่ลบอะไรเลย
console.log(number)      //[ 1, 2, 'a', 3, 4, 5, 6 ]

const last = number.pop() //เอาตัวสุดท้ายออก
console.log(number) //[ 1, 2, 'a', 3, 4, 5 ]
console.log(last); // 6

const first = number.shift() //เอาตัวแรกออก
console.log(number) //[ 2, 'a', 3, 4, 5 ]
console.log(first); //1

//จะเอา 'a' ออก
number.splice(1,1)
console.log(number) ////[ 2, 3, 4, 5 ]

///////////////////////////
//จะทำให้ array เป็น array ว่าง 
let numbers = [1,2,3,4,5,6]
let anatherArr = numbers
console.log(anatherArr) //[1,2,3,4,5,6]
numbers = []
console.log(numbers) //[]
console.log(anatherArr) //[1,2,3,4,5,6]

numbers.length = 0 ;   // ทำให้ array เป็นค่าว่าง แบบนี้ดีกว่า แบบบนอาจจะ error ได้
console.log(numbers) //[]

let numver = [1,2,3,4,1,5,2,6]

console.log(numver.indexOf(1)) //0
console.log(numver.indexOf('1')) //-1
console.log(numver.lastIndexOf(1)) //4  หา index ของ 1 ตัวสุดท้ายที่มันอยู่
console.log(numver.indexOf(2,2))  //6   หาตำแหน่งของเลข 2 จากตำแหน่งที่ 2 เป็นต้นไป (เลข 3เป็นต้นไป)


///////////////////////////////
const ff = [1,2,3];
const ss = [4,5,6];

const combine1 = ff.concat(ss)
console.log(combine1) //[ 1, 2, 3, 4, 5, 6 ]

const combine2 = ss.concat(ff)
console.log(combine2) //[ 4, 5, 6, 1, 2, 3 ]

const combine3 = [...ff,...ss]  //es6 เป็นต้นไป
console.log(combine3) //[ 1, 2, 3, 4, 5, 6 ]

const slice = combine3.slice(2,4) // slice(start,end+1)
console.log(slice) // [3,4]

/////////////////////////

const ja = [2,3,1]
ja.sort()
console.log(ja) // [1,2,3]

ja.reverse()
console.log(ja) //[3,2,1]

///////////////////////////

//for loop

for (let i = 0; i < 5 ; i++) {
    console.log('Hello ' +i) 
    // 'Hello 0'
    // 'Hello 1'
    // 'Hello 2'
    // 'Hello 3'
    // 'Hello 4'
}

for (let i = 0; i < 5 ; i++) {
    if (i %2 !== 0){
        console.log('i am odd ' + i)    
    // 'i am odd 1'
    // 'i am odd 3'
    }
}

//nested for loop
//loop ซ้อน loop
for (let i = 0; i < 5 ; i++) {
    console.log(i);
      for (let j = 0; j < 3 ; j++){
      console.log('Hello ' +j)
      }
}

// 0
// Hello 0
// Hello 1
// Hello 2
// 1
// Hello 0
// Hello 1
// Hello 2
// 2
// Hello 0
// Hello 1
// Hello 2
// 3
// Hello 0
// Hello 1
// Hello 2
// 4
// Hello 0
// Hello 1
// Hello 2



//การบ้าน
/*
Exercise #1
Part 1
There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. Create an array that has these three names in order.

Part 2
Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like?

Part 3
It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. What does the queue look like?
*/
//part1
let waitbank = ['Sofia', 'David', 'Juan']
//part2
waitbank.push('Sara','Augustin')
waitbank.shift();
console.log(waitbank) //['David', 'Juan', 'Sara', 'Augustin' ]

//part3
waitbank.splice(1,0,'Renata')
waitbank.push('Elena')
console.log(waitbank)
//[ 'David', 'Renata', 'Juan', 'Sara', 'Augustin', 'Elena' ]

/*
Exercise #2
Write a JavaScript program to construct the following pattern, using a nested for loop.

*  
* *  
* * *  
* * * *  
* * * * *

*/

for (let i=1; i<=5 ; i++){
  let temp = ""
  for(let j=1 ;j <= i ; j++){
    temp += "*"
  }
console.log(temp)
}

//'*'
//'**'
//'***'
//'****'
//'*****'



/* น่าจะผิด ไม่ใช่ nested loop
let add = (pt) => {
  let dokjan = "";
  for(let i = 0 ; i < pt ; i++){
    console.log(dokjan += "*")
 }
}
add(5);
//'*'
//'**'
//'***'
//'****'
//'*****'
*/

/*
Exercise #3
Write while loops to do the following:

–1. Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
as long as xValue remains positive.

-2. Print all the odd numbers between 1 - 100.

-3. Write a method with a while loop to print 1 through n in square brackets. 
For example, if n = 6 print [1] [2] [3] [4] [5] [6]

-4. Write a method with a while loop that computes the sum of first n positive integers: 
sum = 1 + 2 + 3 + … + n
Examples:
n = 5 sum = 15
n = 19 sum = 190

*/

//-1

let xValue = 10;
while(xValue > 0){
  console.log(xValue);
  xValue -= 0.5;
}



//-2
//อันแรก
let i = 1;
while (i <= 100) {
  if (i % 2 !== 0) {   //ไม่ควรใช้ != ถึงมันจะใช้ได้
    console.log(i);
  }
  i++;
}

//อันสอง
// let i = 0
// do {
//     if(i%2 != 0){
//     console.log(i);
// }
//     i++;
// } while (i<101)

//อันสาม
// for (let i = 0; i<101 ; i++){
//     if(i %2 != 0){
//       console.log(i)   //1,3,5,7,..,99
//     }
//   }


//-3

let sqb = (num) => {
    let i=0
    while(i<num){
        i++
        console.log(`[${i}]`)
    }
}
sqb(6) // [1][2][3][4][5][6]


//-4. 

let summary = (num) => {
    let sum = 0
    let i = 0
    while (i<=num){
        sum += i
        i++
    }
    return sum
}

console.log(summary(5)) //15
console.log(summary(19)) //190
