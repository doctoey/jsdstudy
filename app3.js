console.log('Hello world');

let email = 'cheewathun.l@gmail.com';
console.log(email);

let firstName = 'Cheewathun';
let lastName = 'Lerttanapit';

let fullName = firstName + ' ' + lastName;
console.log(fullName);
console.log(fullName.length);
console.log(fullName.toUpperCase());


//boolean 

let findLetter = email.includes('@')
console.log(findLetter);  // true ใน email มี @ เลยได้ true


//number

let raduis = 10;
const pi = 3.14;
console.log(raduis,pi);

console.log(10+5); //15
console.log(10-5); //5
console.log(10*5); //50
console.log(10/5); //2
console.log(10%5); //0  หารเอาเศษ เศษ 0
console.log(10**2); //100 ยกกำลัง

//order operator
let nnnnnn = 10*2 + 5**2 -7 
console.log(nnnnnn);    //38

//undefined 
let ageeeee;
console.log(ageeeee); //undefined

//Null ค่าว่าง
let aaaaa = null;    //ค่าเริ่มต้นเป็น false

if (!aaaaa) {    //ใส่ !หน้า ให้มันเป็น true
    console.log("a ia null");
} else {
    console.log("a ia not null");
}

// NaN

let ccd = 10+"ก"
console.log(ccd);
let ddc = 10-"ก"
console.log(ddc);
let eed = 10*"ก"
console.log(eed);
let ffd = 10/"ก"
console.log(ffd);