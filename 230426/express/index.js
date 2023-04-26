// const express = require('express');

// const app = express(); // จำเลย syntax 
// const express = require('express');
// const { preOrdersRouter }  = require('./routers/preOrder.js');

import express from 'express';
import { preOrdersRouter } from './routers/preOrder.js';

const app = express();

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
        res.status(200).send(chickenRice); 
    } else if (menu === 'fried-chicken-rice') {
        chickenRice.meat = 'fried chicken';
        chickenRice.sauce = ['syrup', 'chili'];
        res.status(200).send(chickenRice); 
    } else {
        //400 Bad Request
        res.status(400).send(`We not serving ${menu}`)
    }
});

// app.use(preOrdersRouter);
app.use('/pre-orders', preOrdersRouter);

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});