// npm: node package manager



// following code for simple implementation: 
// const fs = require("fs");

// fs.writeFile("message.txt", "Hello Node", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

// fs.readFile("message.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//using npm:

var generateName = require('sillyname');
var sillyName = generateName();