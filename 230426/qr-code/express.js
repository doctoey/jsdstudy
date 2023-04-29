const express = require('express');

const app = express();

app.get('/' , (req,res) => {
    res.end('hello')
});

app.listen(8000, () => {
    console.log('ok 8000')
})