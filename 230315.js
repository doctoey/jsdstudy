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

