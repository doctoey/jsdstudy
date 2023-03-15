const number = [3,4];

number.push(5,6)  // ต่อหลัง
console.log(number)  //[ 3, 4, 5, 6 ]

number.unshift(1,2) // นำไปไว้ข้างหน้า
console.log(number)   //[ 1, 2, 3, 4, 5, 6 ]

number.splice(2,0,'a')
console.log(number)      //[ 1, 2, 'a', 3, 4, 5, 6 ]

const last = number.pop() //เอาตัวสุดท้ายออก
console.log(number) //[ 1, 2, 'a', 3, 4, 5 ]
console.log(last); // 6