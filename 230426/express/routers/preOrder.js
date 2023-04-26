// import { Express } from "express";
// const express = require('express');
import express from 'express';
const preOrdersRouter = express.Router();

const preOrders = [];

// preOrdersRouter.get('/:orderId', (req, res) => { 
// });

preOrdersRouter.post('/', (req, res) => { 
    const { menu, size } = req.query;
    console.log('Request query');
    console.log(req.query);
    const newPreorder = {
        id: preOrders.length,
        menu: menu,
    };
    preOrders.push(newPreorder);
    res.status(200).send(`Order success. Your order id ${newPreorder.id}`); 
});

//ลูกค้ายกเลิกออเดอร์
// DELETE /:menu 

preOrdersRouter.delete('/:orderID', (req, res) => { 
    const { menu, orderID } = req.params;
    const newPreorderIndex = preOrders.findIndex((order) => order.id === order.id);
    if (newPreorderIndex === -1) { //ถ้าเป็น -1 คือ ไม่มีคำสั่ง order นี้ ยกเลิกไม่ได้
        return res.status(404).send(`Order ${orderID} not found`); 
    }
    preOrders[newPreorderIndex] = null
    res.status(200).send(`Order ${orderID} canceled`); 
});

// module.exports = { preOrdersRouter };
export { preOrdersRouter };