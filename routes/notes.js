const notes = require('express').Router();
const { response } = require('express');
const {readFromFile, readAppend} = require('../helpers/fsUtis');

notes.get('/', (req, res)=> {
    console.log(`Got notes!`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req,res)=>{
const {title, text} = req.body;

if (title && text){
    const newNote = {
        title,
        text,
    };

    readAppend(newNote, './db/db.json');

    res.json(response);
} else {
    res.json('Error in adding note');
}
});


module.exports = notes;