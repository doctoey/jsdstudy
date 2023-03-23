const promise = new Promise((resolve, reject) =>{
    let sum = 1+1;

    if (sum === 3) {
        resolve('Success');
    } else {
        reject('Failed');
    }
})

promise.then((message) => {  //then เมื่อเป็นจริง
    console.log('This is success resolve ' + message)
}).catch((message) => { //catch เมื่อมันไม่จริง (error)
    console.log('This is error reject ' + message) //ข้อนี้ไม่จริง เลย log ค่า This is error reject Failed
})


///

const failed = true;

const myPromise = new Promise((resolve, reject) => { 
    if(failed)  // if failed = true
        reject('fail promise');
    else  // if failed = false
        resolve('resolved!!')
});

function success(result){
  console.log(result);
}

function onFailed(error){
  console.log(error);
}

myPromise.then((result) => success(result))
.catch((error) => onFailed(error));