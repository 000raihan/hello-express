const express = require('express');

////Day One

const app = express();
app.use(express.json());
app.use('/todos', require('./routes'));






app.listen(4000, () => {
    console.log('server is listening on port 4000')
})