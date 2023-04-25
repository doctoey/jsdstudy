console.log('Node.js is running...')


//Is it a feature ot bug
function queryDatabase()  {
    setTimeout(function() {
        var r = 'Finish QueryDatabase()'
        return r
 },2000)
}

function main() {
        console.log('Result: ' + queryDatabase());    
}

main()





//Back Up Code 

// function queryDatabase(callback)  {
//     setTimeout(function() {
//         var r = 'Finish QueryDatabase()'
//         callback(r)
//  },2000)
// }

// function main() {
//     queryDatabase(function(r){
//         console.log('Result: ' + r);
//     })
     
// }