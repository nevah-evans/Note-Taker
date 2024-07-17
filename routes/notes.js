const notes = require('express').Router();
const {readFromFile, writeToFile} = require('../helpers/fsUtis');

notes.get('/', (req, res)=> {
    console.log(`${req.method} note added!`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// notes.post('/', (req,res)=>{

// });

module.exports = notes;