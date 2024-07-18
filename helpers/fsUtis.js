const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);


const writeToFile= (destination, content)=>{
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) => {
        err ? console.log(err): console.log ('Note added!');
    });
};

const readAppend = (content, file) => {
    fs.readFile(file, 'utf-8', (err, data)=>{
        if (err) {
            console.log(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
        }
    });
};



module.exports = {readFromFile, writeToFile, readAppend};