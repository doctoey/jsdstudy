import express from "express";
const webServer = express();
const port = 3000;
const ipAddress = "127.0.0.1";

// code down below
webServer.get('/', (req, res) => {
    res.json("This is Root Route")
})

webServer.get('/news', (req, res) => {
    res.json([
        { name: "news 1", detail: "detail 1" },
        { name: "news 2", detail: "detail 2" },
        { name: "news 3", detail: "detail 3" },
      ])
})

webServer.get('/users', (req, res) => {
    const mockid = [
        { userId: "mock-id-1" },
        { name: "mock-id-2" },
        { name: "mock-id-3" },
      ];
    res.json(mockid)
})

webServer.get('/me', (req, res) => {
    res.json({
        name: "mock-name",
        role: "user",
        picture: "https://shorturl.at/qtFJM"
      })
})

webServer.get('/health-check', (req, res) => {
    res.json("Server is fine!")
    // res.send("Server is fine!")
})

webServer.listen(port, ipAddress, () => { //webServer.listenต้องอยู่ล่างสุดเสมอ
    console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
    console.log(`Address: http://${ipAddress}:${port}`);
  });