const gJavascript = document.querySelector('#reading-list li:nth-child(2) .name');
//console.log(gJavascript);
gJavascript.innerHTML = 'Advanced JavaScript !!!'; // nth-child(2) .name คือชิ้นที่ 2 Java Script > Advanced JavaScript !


const tryA = document.querySelector('#reading-list li:nth-child(1) .name');
tryA.innerHTML = 'tryyyyy !!!'; //HTML & CSS > try

const tryB = document.querySelector('#reading-list li:nth-child(3) .name');
tryB.innerHTML = 'Ahaaaaa !!!';  //The DOM > Ahaaaaa


const readingList = document.querySelectorAll('#reading-list li .name');
readingList.forEach(function(list){
    list.innerHTML += ' <b>book title</b>'
}) //add book title ลงใน 3 child เลย
//textContent จะรัน ทุกอย่างเป็นข้อความ //ไม่แสดงผลแท็ก b
// innerHTML จะรันในรูปแบบ HTML tag  // แสดงผล แท็ก b ตัวหนา
// ถ้าเปลี่ยนด้วย value นี้ ผลไม่ต่างกันครับ 
//เอา book title ไปไว้ข้างหน้า
//list.textContent = 'book title : ' + list.textContent
//list.textContent = `book title: ${list.textContent} `;  

