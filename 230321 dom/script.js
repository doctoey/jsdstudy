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
   // list.textContent = `book title: ${list.textContent} `; //ไว้ข้างหน้า

}) //add book title ลงใน 3 child เลย
//textContent จะรัน ทุกอย่างเป็นข้อความ //ไม่แสดงผลแท็ก b
// innerHTML จะรันในรูปแบบ HTML tag  // แสดงผล แท็ก b ตัวหนา
// ถ้าเปลี่ยนด้วย value นี้ ผลไม่ต่างกันครับ 
//เอา book title ไปไว้ข้างหน้า
//list.textContent = 'book title : ' + list.textContent
//list.textContent = `book title: ${list.textContent} `;  


//code k'lak
//better way for element.addEventListener()
const list = document.querySelector('#reading-list ul');

// //Interacting with Form -- add readinglist
const addForm = document.forms['add-list'];
addForm.addEventListener('submit',function(e){
    e.preventDefault(); // prevent from refresh
    const value = addForm.querySelector('input[type="text"]').value; //add new reading list in the text box
   // console.log(value);

// //create element
// const li = document.createElement('li');
// for (createLi of li){
//     createLi.addEventListener('click', e => {
//         let parentLi = createLi.parentNode;
//         parentLi.parentNode.createElement(parentLi)
//     })
// }

//const ul = document.querySelector('ul'); // get the ul element
//const li = document.createElement('li'); // create a new li element
//li.textContent = value; // set the text content of the li element
//ul.appendChild(li); // add the li element to the ul element

// const li = document.createElement('li');
// li.textContent = value;

//});



// //create element
const childEle = document.createElement('li');
const spanEle = document.createElement('span');
const delEle = document.createElement('span');

// //add content
spanEle.textContent = value;
delEle.textContent = 'delete';

// //add classes
spanEle.classList.add('name');
delEle.classList.add('delete');
// <li><span></span><span></span></li>
// //append to DOM
childEle.appendChild(spanEle); // <li><span>value-spanEle</span></li>
childEle.appendChild(delEle); // <li><span class="name">value-spanEle</span><span class="delete">delete</span></li>
list.appendChild(childEle); // <ul><li><span class="name">value-spanEle</span><span class="delete">delete</span></li></ul>

// Reset input Value
addForm.querySelector('input[type="text"]').value = ''; // ''
});




// ลองลบ ไม่รอด
// const deleteBtns = document.getElementsByClassName('delete');
// for (delBtn of deleteBtns){
//     delBtn.addEventListener('click', (e) =>{
//         let parentLi = delBtn.parentNode;
//         parentLi.parentNode.removeChild(parentLi);
//     });
// }


//ปุ้มลบ
//const list = document.querySelector('#readings-list ul'); ช้างบนมี
list.addEventListener('click', (e) =>{
    if(e.target.className === 'delete'){
        const li = e.target.parentNode;
        list.removeChild(li);
    }
});