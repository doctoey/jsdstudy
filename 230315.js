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