let fs = require('fs');

fs.readFile('a.txt', 'utf8', (error, data)=>{
    console.log(data);
})