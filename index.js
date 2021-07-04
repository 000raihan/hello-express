const express = require('express');



const shortid = require('shortid');
const app = express();
app.use(express.json());
app.use('/todos', require('./routes'));



let todoArray = [];



app.listen(4000, () => {
    console.log('server is listening on port 4000')
})