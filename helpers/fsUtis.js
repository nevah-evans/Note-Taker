const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);

const writeToFile= ()=>{
    fs.writeFile(), (err)=>{
        err ? console.log(err): console.log ('Note added!');
    };
};

module.exports = {readFromFile, writeToFile};