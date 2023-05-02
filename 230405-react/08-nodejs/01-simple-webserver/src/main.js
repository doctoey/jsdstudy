import express from "express";
const webServer = express();
const port = 3000;
const ipAddress = "127.0.0.1";

//.get( route, handler(request, response) )
//.post( route, handler(request, response) )
//.put( route, handler(request, response) )
//.delete( route, handler(request, response) )
webServer.get("/", (req, res) => {
  res.send("This is / route");
});

webServer.get("/admin", (request, response) => {
 //res.send("This is /admin route"); //ReferenceError: res is not defined ต้องเปลี่ยนเป็น response
 response.send("This is /admin route"); //ReferenceError: res is not defined ต้องเปลี่ยนเป็น response
});

webServer.get("/user", (request, response) => {
  const object = {
    name: "John",
    number: '07',
  }
  response.send(object);
  // response.send("This is /user route");
});

webServer.get("/usertoey", (request, response) => {
  const object = {
    name: "toey",
    number: '07',
  }
  response.json(object); //json จะส่งแต่ object
});

webServer.listen(port, ipAddress, () => { //webServer.listenต้องอยู่ล่างสุดเสมอ
  console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
  console.log(`Address: http://${ipAddress}:${port}`);
});

//webServer.listen(3000, 127.0.0.1, callback() );

//express.listen(port, hostname, callback() );
// READ, CREATE, UPDATE, REMOVE
// GET, POST, PUT, DELETE