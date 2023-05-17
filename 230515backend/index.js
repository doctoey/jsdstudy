// import express มาใช้ 
const express = require('express');
const app = express();
// import mongoose มาใช้
const mongoose = require('mongoose');

//import router
const AuthenRouter = require('./api/authen/authen-router');

//body-parser
app.use(express.json());
app.use('/authen', AuthenRouter)
// app.use('/activity', ActivityRouter)

// app.get('/activity/:id', (req, res) => {

// })

// app.get('/activity/', (req, res) => {

// })

// app.post('/activity/', (req, res) => {

// })

// app.put('/activity/', (req, res) => {

// })

// app.delete('/activity/', (req, res) => {

// })

// app.post('/login', (req, res) => {

// })

// app.post('/login', (req, res) => {

// })

// app.post('/register', (req, res) => {

// })

const start = async () => {
    await mongoose.connect(
        'mongodb+srv://testtoeyja:toeyjatest@cluster0.mfjuwoz.mongodb.net/'
    ).then(() => {
        console.log('Connected to database')
    }).catch((err) => {
        console.log(err)
    })

    app.listen(3000, () => {
        console.log('Start server at port 3000, http://127.0.0.1:3000/')
    })
}

start();

/*
// สร้าง route ขึ้นมา
//http://127.0.0.1:3000/
app.get('/', (req, res) => {
    res.send('Hello World');
})

//http://127.0.0.1:3000/home/1
app.get('/home/:id', (req, res) => {
    console.log(req.params);
    console.log(req.params.id);
    res.status(200).send('This is home page');
})

app.get('/home/:id/:id2', (req, res) => {
    console.log(req.params);
    console.log(req.params.id);
    console.log(req.params.id2);
    res.status(200).send('This is asd 2');
})

//http://127.0.0.1:3000/data/1/1
//http://127.0.0.1:3000/data/2/1
app.get('/data/:id/:id2', (req, res) => {
    const id = req.params.id;
    const data = [
        {
            id:'1',
            value:1
        },
        {
            id:'2',
            value:2
        }
    ]
    let result
    data.forEach(element => {
        if(element.id === id){
            result = element
        }
    })
    res.status(200).send(result);
})
*/

//เปิด server ที่ port 3000
// app.listen(3000, () => {
//     console.log('Start server at port 3000, http://127.0.0.1:3000/');
// })