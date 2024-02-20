const { log } = require("console");
const fs = require("fs");

fs.writeFile("test.txt", "Hey Hello! 2", function(err){
    if (err) throw err;
    console.log("FILE SAVED")
})
  
fs.readFile("test.txt", 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)
})