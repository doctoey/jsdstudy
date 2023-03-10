let user = {
    firsName : 'toey',
    age : 17,
    location : 'london is blue',
    หิว : 'กินไรดี',
    readingList:['HTML', 'CSS', 'JavaScript']
}
console.log(user);
console.log(user.age);
console.log(user.หิว);
console.log(user.readingList);

//จะเปลี่ยนอายุทำไง
user.age = 18
console.log(user.age);

user.readingList[0] = 'Figma'
console.log(user.readingList[0]);
console.log(user.readingList[1]);
console.log(user.readingList.length);