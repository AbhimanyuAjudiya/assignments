let fs = require('fs')

fs.writeFile('a.txt', 'Hello Every one' , err =>{
    console.log(err);
})
console.log("hi");