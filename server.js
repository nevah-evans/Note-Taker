const express = require('express');
const fs = require('fs');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: ture}));
app.use('/api', api);

app.use(express.status('public'));

app.listen(PORT, () =>{
    console.log(`Server working! on port ${PORT}`);
});