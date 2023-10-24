/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message:"Pass the url: ",
      name:"URL"
   },
  ])
  .then((answers) => {
    const url=answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("urlimage.png"));
    var svg_string = qr.imageSync(url, { type: 'png' }); 


    // console.log(url);
  })


  .catch((error) => {
    if (error.isTtyError) {
      
    } else {
   
    }
  });


