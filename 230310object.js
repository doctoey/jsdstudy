let user = {
    firsName : 'toey',
    age : 17,
    location : 'london is blue',
    หิว : 'กินไรดี',
    readingList:['HTML', 'CSS', 'JavaScript']
}
console.log(user);
console.log(user.age); //17
console.log(user.หิว); //กินไรดี
console.log(user.readingList); //[ 'HTML', 'CSS', 'JavaScript' ]

//จะเปลี่ยนอายุทำไง
user.age = 18
console.log(user.age); //18

user.readingList[0] = 'Figma'
console.log(user.readingList[0]); //Figma
console.log(user.readingList[1]);
console.log(user.readingList.length); //3


//change data type
let xyz = 123 ; 
console.log(typeof xyz); //number
xyz = 'me';
console.log(xyz); //me
console.log(typeof xyz); //string

const date = new Date()
console.log(typeof date) // object
