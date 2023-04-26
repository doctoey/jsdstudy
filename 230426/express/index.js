// const express = require('express');
import express from 'express';

const app = express(); // จำเลย syntax 

//เอาข้าวมันไก่ 1 จาน
// GET http://localhost:8080/

// GET http://localhost:8080/chicken-rice
// GET http://localhost:8080/fried-chicken-rice

// app.get('/', (request, response) => {});
app.get('/:menu', (req, res) => {
    console.log('Request paramaeters');
    console.log(req.params);
    const { menu } = req.params;
    const chickenRice = {
        rice: 'olied rice',
    };
    if (menu === 'chicken-rice') {
        chickenRice.meat = 'boiled-chicken';
        chickenRice.sauce = ['red', 'white'];
        res.send(chickenRice); 
    } else if (menu === 'fried-chicken-rice') {
        chickenRice.meat = 'fried chicken';
        chickenRice.sauce = ['syrup', 'chili'];
        res.send(chickenRice); 
    } else {
        //400 Bad Request
        res.status(400).send(`We not serving ${menu}`)
    }
});

// app.get('/fried-chicken-rice', (req, res) => {
//     const friedchickenRice = {
//         rice: 'olied rice',
//         meat: 'fried chicken',
//         sauce: ['red', 'chili'],
//     };
//     //default = 200
//     res.send(friedchickenRice); 
// });


app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});