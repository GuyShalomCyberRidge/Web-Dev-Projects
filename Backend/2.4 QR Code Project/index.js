/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

const questions = [{
    type: 'input',
    name: 'urlInput',
    message: 'What Website do you want a QR for?',
    default: "https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1",
  }]

inquirer.prompt(questions).then((answers) => {
    var qr_svg = qr.image(answers.urlInput, {type: "png"});
    qr_svg.pipe(fs.createWriteStream('website_qr.png'));
    console.log("VVVVVVVV" + answers.urlInput +"\n")
    fs.writeFile("URL.txt", answers.urlInput, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
        }
      });
})
.catch((error) => {
    if (error.isTtyError) {
        console.log(error.isTtyError)
    } else {
        console.log(error)
    }
});

