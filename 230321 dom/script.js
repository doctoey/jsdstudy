const gJavascript = document.querySelector('#reading-list li:nth-child(2) .name');
//console.log(gJavascript);
gJavascript.innerHTML = 'Advanced JavaScript !!!'; // nth-child(2) .name คือชิ้นที่ 2 Java Script > Advanced JavaScript !


const tryA = document.querySelector('#reading-list li:nth-child(1) .name');
tryA.innerHTML = 'tryyyyy !!!'; //HTML & CSS > try

const tryB = document.querySelector('#reading-list li:nth-child(3) .name');
tryB.innerHTML = 'Ahaaaaa !!!';  //The DOM > Ahaaaaa


const readingList = document.querySelectorAll('#reading-list li .name');
readingList.forEach(function(list){
    list.textContent += ' book title'
}) //add book title ลงใน 3 child เลย