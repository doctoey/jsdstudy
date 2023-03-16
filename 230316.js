const number = [1,2,3,4,5];

number.forEach((item,index) => {
    console.log(index,item);
})  
//01
//12
//23
//34
//45


letter = ['a','b','c','d','a','c','a'];
let count = {}; //create empty object to keep track the count
letter.forEach(item => {
    if (count[item]){ //check if we have an letter in
        count[item]++;
    } else {
        count[item] = 1;
    }
    //console.log(count)
})
console.log(count); //{ a: 3, b: 1, c: 2, d: 1 } //นับจำนวนตัวซ้ำ
//แต่ถ้าเอา console.log(count) ไปไว้ในบรรทัด 21 มันจะค่อยๆไล่ให้ดู
// { a: 1 }
// { a: 1, b: 1 }
// { a: 1, b: 1, c: 1 }
// { a: 1, b: 1, c: 1, d: 1 }
// { a: 2, b: 1, c: 1, d: 1 }
// { a: 2, b: 1, c: 2, d: 1 }
// { a: 3, b: 1, c: 2, d: 1 }