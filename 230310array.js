let fruit = ['apple', 'orange', 'banana'];

console.log(fruit[0]);  // index apple
console.log(fruit[1]);  //orange
console.log(fruit[2]);  //banana
console.log(fruit[3]);  //undefined เพราะ index เริ่มที่ 0 มันเลยยังไม่ได้กำหนดค่า
//จะใส่อะไรลง index 3 ทำไง 
fruit [3] = 'grape';
console.log(fruit[3]) //grape
//จะเปลี่ยนจากแอบเปิ้ล เป็นอย่างอื่น ทำไง
fruit [0] = 'berry';
console.log(fruit) //[ 'berry', 'orange', 'banana', 'grape' ] แทนที่ apple ไปแล้ว
console.log(fruit.length) // 4
