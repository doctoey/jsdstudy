console.log('Node.js is running...')

//Non Blocking IO
// setTimeout(function() {
//     console.log('World')
// }, 2000);

// console.log('Hello');

setInterval(() => {
    console.log('fetching data from dev.google.com')
}, 2000);

setInterval(() => {
    console.log('fetching data from dev.amazon.com')
}, 4000);