//const menu = document.getElementById('menu');

//const button = document.getElementById('btn')
//button.addEventListener('click' , hello) 


function Hello() {     
    //alert("ว้าวววว");        //สั่งว่า ถ้ากด onclick จะแสดงคำว่า ว้าว
    console.log("chicken") ;   //ถ้ากด ok จะแสดง chicken 
    document.getElementById("btn").innerHTML = "the button has been clicked" ;//คลิกแล้ว แท็ก p จะเปลี่ยนคำเป็นคำนี้
    document.getElementById("btn7").innerHTML = `ง่วงครั๊บ`;
}

document.getElementById("btn").innerHTML = "the button clicked" //ม่ายขึ้น เพราะอยุ่นอกฟังก์ชั๊น