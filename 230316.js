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
let count = {};
letter.forEach(item => {
    if (count[item]){
        count[item]++;
    } else {
        count[item] = 1;
    }
})
console.log(count); //{ a: 3, b: 1, c: 2, d: 1 } //นับจำนวนตัวซ้ำ
