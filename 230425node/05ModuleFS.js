
const http = require('http')
const fs = require('fs')
const port = 8080

http.createServer(render).listen(port)
console.log('Server started on port: ' + port)

function render(request, response) {
    let ctype = {'Content-Type':'text/html'}
    
    //Module FS readFile index.html and respond 
    fs.readFile(__dirname + '/html/index.html', (error, content) => {
        if (!error) {
            response.writeHead(200, ctype)
            response.write(content)
        } else {
            response.writeHead(404, ctype)
            response.write(error.message)            
        }
        return response.end()        
    })
}